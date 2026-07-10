import{R as t}from"./iframe-BRR_Yx3q.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DdIr9Ot6.js";import{R as g}from"./zIndexSlice-2cKWUmx1.js";import{X as S}from"./XAxis-D2YOv_sk.js";import{Y as h}from"./YAxis-DT9J28i-.js";import{S as A}from"./Scatter-PYiuaouK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dreti13-.js";import"./index-C7O-rWXn.js";import"./index-CJWeDOqD.js";import"./index-C-RWhaz3.js";import"./index-dwufCIeA.js";import"./throttle-9Cm-XaBZ.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DsmsDUZ3.js";import"./axisSelectors-BvSj2dv3.js";import"./resolveDefaultProps-BuYHfJJu.js";import"./isWellBehavedNumber-BoZxamXc.js";import"./d3-scale-DiG9HsKp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D7iKBlwo.js";import"./chartDataContext-7uLTjT1t.js";import"./CategoricalChart-Bo9h-nM1.js";import"./CartesianAxis-CtRqWNRX.js";import"./Layer-DEnO1k0R.js";import"./Text-CNcfggmg.js";import"./DOMUtils-DaLtqU51.js";import"./Label-BFmCxOLP.js";import"./ZIndexLayer-B_gUHSFj.js";import"./types-DUTL6gmw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BTME76kn.js";import"./useAnimationId-C1SKzxsx.js";import"./Curve-CgfofNr-.js";import"./step-DD-M69WZ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dd3NVMXv.js";import"./Symbols-CNXodT7a.js";import"./symbol-Brgl6U8b.js";import"./ActiveShapeUtils-BvVAnTtS.js";import"./RegisterGraphicalItemId-vR20SUSb.js";import"./ErrorBarContext-DKxut-kF.js";import"./GraphicalItemClipPath-DlaiPyn0.js";import"./SetGraphicalItem-BE7YCbvJ.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data,
      ...rest
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const ct=["API"];export{r as API,ct as __namedExportsOrder,nt as default};
