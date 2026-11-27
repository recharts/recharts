import{R as t}from"./iframe-CqOe7k5Y.js";import{z as a}from"./RechartsWrapper-C6U1x4NS.js";import{R as p}from"./zIndexSlice-HvZ_KFp3.js";import{C as n}from"./ComposedChart-BeSg73-5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BAO_KFfa.js";import{X as l}from"./XAxis-BHc3UEw3.js";import{Y as h}from"./YAxis-DEQnYc30.js";import{L as c}from"./Legend-B3y3jZUw.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uDtrY5a-.js";import"./get-CjriyByo.js";import"./axisSelectors-HXuL0A3L.js";import"./throttle-BawAsSGW.js";import"./index-NjrwBPri.js";import"./index-Nzssfkwo.js";import"./polarAxisSelectors-DnFOpaLb.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-B6EefrnE.js";import"./index-C49j9LJv.js";import"./index-DQgKuLzP.js";import"./renderedTicksSlice-B-tkfTkQ.js";import"./index-CjpYzq4S.js";import"./fillDefinitions-BUUlO_ua.js";import"./CartesianChart-CGVfE0i2.js";import"./chartDataContext-B9y28Tuh.js";import"./CategoricalChart-Cm4y0z4v.js";import"./getRadiusAndStrokeWidthFromDot-iFUrCwsR.js";import"./Layer-CqFOI8aQ.js";import"./Curve-C0AiDBmT.js";import"./types-DHkZz5Qp.js";import"./step-C0xBjYaF.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CclxtIIf.js";import"./Label-yQ-nD2jU.js";import"./Text-N8PDZP4n.js";import"./ZIndexLayer-Bx6NEOZE.js";import"./ActivePoints-DOsR5596.js";import"./Dot-QqtvItF4.js";import"./activeStyles-DyQy4djd.js";import"./useAnimationId-_GPHqvCi.js";import"./Symbols-DOIoBL3s.js";import"./symbol-Cf12ZYaI.js";import"./ErrorBarContext-CQfvj0jY.js";import"./SetGraphicalItem-5gHOvcya.js";import"./ActiveShapeUtils-dZojZzcj.js";import"./useEffectiveDataKey-C_dNJO7p.js";import"./CartesianAxis-botWNN7F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BT23gI0j.js";import"./uniqBy-bwHS4C5O.js";import"./iteratee-BmCg4GfS.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
