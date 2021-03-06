<template>
  <div id="app" @mousemove="updateMousePos">
    <div
      id="tool-size-indicator"
      v-if="showingSizeIndicator"
      :style="sizeIndicatorStyles"
    ></div>
    <main>
      <div class="sidebar left">
        <h2>Tools</h2>
        <div id="tools">
          <button
            v-for="(tool, index) in $store.tools"
            :key="index"
            @click="changeTool(index)"
            :class="{ selectedTool: index == $store.currentToolIdx }"
          >
            {{ tool.name }}
          </button>
        </div>
        <h2>Options</h2>
        <div id="tool-options">
          <div
            v-for="(option, optionName) in $store.currentTool.options"
            style="text-align: left"
            :key="optionName"
          >
            <label>{{ startCase(optionName) }}</label>
            <br v-if="option.type != 'boolean'" />
            <input
              v-if="option.type == 'number'"
              v-model.number="option.value"
              type="number"
            />
            <!-- cant use v-model because https://github.com/xiaokaike/vue-color/issues/185 -->
            <chrome-picker
              class="color-picker"
              v-else-if="option.type == 'color'"
              :value="option.value"
              @input="(c) => (option.value = c.hex8)"
            />
            <input
              v-else-if="option.type == 'boolean'"
              type="checkbox"
              v-model="option.value"
            />
          </div>
        </div>
      </div>

      <div>
        <Canvas
          @mouseover="$store.hoveringCanvas = true"
          @mouseleave="$store.hoveringCanvas = false"
        />
      </div>

      <div class="sidebar right">
        <h2>Layers</h2>
        <draggable v-model="$store.layers" :animation="200">
          <transition-group type="transition">
            <div
              v-for="layer in $store.layers"
              :key="layer.id"
              :class="{ selectedLayer: layer.id == $store.currentLayerId }"
              class="layer"
              @click="clickedLayer(layer.id)"
            >
              {{ layer.name }}
            </div>
          </transition-group>
        </draggable>
        <div class="center-child">
          <button @click="addLayer">Add Layer</button>
        </div>
        <p>{{ $store.currentPrefixedShortcutKey }}</p>

        <h2>Actions</h2>

        <button @click="clearLayer">Clear Layer</button>
        <button @click="saveCanvas">Save as Image</button>
        <button @click="undo">Undo</button>
        <button @click="redo">Redo</button>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Canvas from "@/components/Canvas.vue";
import EVENTS from "@/models/events";
import draggable from "vuedraggable";
import { Chrome } from "vue-color";
import { Eraser, Pen, Rect } from "./models/tool";

@Component({
  components: {
    Canvas,
    draggable,
    "chrome-picker": Chrome,
  },
})
export default class App extends Vue {
  // METHODS
  updateMousePos(event: MouseEvent) {
    this.$store.mousePos.x = event.pageX;
    this.$store.mousePos.y = event.pageY;
  }

  addLayer() {
    this.$root.$emit(EVENTS.createLayer);
  }

  changeTool(idx: number) {
    this.$store.currentToolIdx = idx;
  }

  clearLayer() {
    this.$store.currentLayer.clear();
  }

  updateOption(option: string) {
    // TODO: Validate input
    console.log(option);
  }

  clickedLayer(id: string) {
    this.$store.currentLayerId = id;
  }

  saveCanvas() {
    this.$root.$emit(EVENTS.saveCanvas);
  }

  undo() {
    console.log("undo button pressed");
    this.$root.$emit(EVENTS.undo);
  }

  redo() {
    console.log("redo button pressed");
    this.$root.$emit(EVENTS.redo);
  }

  // GETTERS
  get sizeIndicatorStyles() {
    let size = 3;
    if (
      this.$store.currentTool instanceof Pen ||
      this.$store.currentTool instanceof Eraser
    ) {
      size = this.$store.currentTool.options.size.value;
    } else if (this.$store.currentTool instanceof Rect) {
      size = this.$store.currentTool.options.stroke
        ? this.$store.currentTool.options.strokeWeight.value
        : size;
    }

    // Prevente user confusion on why cursor disappeared
    if (size < 1) size = 1;

    return {
      width: size + "px",
      height: size + "px",
      top: this.$store.mousePos.y - size / 2 + "px",
      left: this.$store.mousePos.x - size / 2 + "px",
    };
  }

  get showingSizeIndicator() {
    return this.$store.hoveringCanvas; // && "size" in this.$store.currentTool.options;
  }
}
</script>

<style scoped>
#tools {
  margin-bottom: 20px;
}

.selectedTool {
  background: gold;
}

#tool-options {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.layer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2em;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 3px;
  margin-bottom: 3px;
}
.selectedLayer {
  background: gold;
}

#tool-size-indicator {
  border-radius: 50%;
  border: 1px dashed white;
  position: absolute;
  pointer-events: none;
}
</style>