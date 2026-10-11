import{R as t}from"./iframe-DUGvLzaM.js";import{j as a}from"./RechartsWrapper-Ba1hxoNM.js";import{R as p}from"./zIndexSlice-B4Mogj2z.js";import{C as n}from"./ComposedChart-cwP5-Ry_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BoA-LB1U.js";import{X as l}from"./XAxis-D-RL7BSf.js";import{Y as h}from"./YAxis-BJE0EUN2.js";import{L as c}from"./Legend-CmBjeBzE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B6fFLtp3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CGc2s0Fh.js";import"./throttle-iBva9Xri.js";import"./index-Bf1ebX0Z.js";import"./index-D4rZIo04.js";import"./isWellBehavedNumber-Dz-qkofC.js";import"./d3-scale-C86sab-h.js";import"./index-CmYddVJ2.js";import"./index-CwW47wP2.js";import"./renderedTicksSlice-CrtrmLXp.js";import"./index-C-yXSHy-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CoHpfyp6.js";import"./chartDataContext-DrEWUsQF.js";import"./CategoricalChart-W5cmFX3l.js";import"./Layer-C-Z-OoWn.js";import"./Curve-BLS66xAF.js";import"./types-CAM6k8hf.js";import"./step-CA28nkdr.js";import"./path-DyVhHtw_.js";import"./activeStyles-DDiORVPn.js";import"./Label-C6rBfDHi.js";import"./Text-DzH8Q7Re.js";import"./pageBackground-9CWG-5EI.js";import"./useId-Bo2C_hQY.js";import"./useBackwardsCompatibleTheme-Dm759DN1.js";import"./ZIndexLayer-ytkVOhJ8.js";import"./useAnimationId-FtVQIfuZ.js";import"./dataEntryStyles-DRqvsfnl.js";import"./ActivePoints-C8OEAzuD.js";import"./Dot-B4gb0ExT.js";import"./ErrorBarContext-CAZ1Nd8e.js";import"./GraphicalItemClipPath-BsVVWJrM.js";import"./SetGraphicalItem-BkJcCs8V.js";import"./getRadiusAndStrokeWidthFromDot-Bj_75x8K.js";import"./ActiveShapeUtils-CYHb3Hz-.js";import"./useGraphicalItemIdentity-CNWhuATd.js";import"./CartesianAxis-FW2HtnAK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C4LVhUVE.js";import"./symbol-stOdtstY.js";import"./useElementOffset-DIK-eXNy.js";import"./uniqBy-DCe0PNdF.js";import"./iteratee-eCwGGnHr.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
