import{R as t}from"./iframe-CBRSMBnf.js";import{y as p}from"./RechartsWrapper-CtIo7IeI.js";import{R as a}from"./zIndexSlice-G_MKhK64.js";import{C as n}from"./ComposedChart-a--bFFQ0.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-BwqfHSpg.js";import{X as d}from"./XAxis-hFmUjMoe.js";import{Y as h}from"./YAxis-DSUkkbnx.js";import{L as g}from"./Legend-qD3Pkinv.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-rMq54uQA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ca58SJJZ.js";import"./throttle-9ZU0NYV2.js";import"./index-BFSKO-j2.js";import"./index-Dr6qgTGt.js";import"./polarAxisSelectors-CmG6JvL9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-YF59ukCY.js";import"./index-1te-Kc2Q.js";import"./index-DGSnNf5w.js";import"./renderedTicksSlice-Dn7AqsKy.js";import"./index-AkU5pxMr.js";import"./fillDefinitions-1nZ0ZPs-.js";import"./CartesianChart-PQ4f033u.js";import"./chartDataContext-sCDQ5wEf.js";import"./CategoricalChart-BElxArO-.js";import"./getRadiusAndStrokeWidthFromDot-ZvZ8EJkG.js";import"./Layer-aUkXnOjv.js";import"./Curve--RPaNs4h.js";import"./types-BEawq_c0.js";import"./step-DBVTJVz7.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CAxQKe3A.js";import"./Label-BfZk-Sdf.js";import"./Text-DWGdTCGH.js";import"./ZIndexLayer-BCt1x8VL.js";import"./ActivePoints-DpAEo5pc.js";import"./Dot-Cui8UCyf.js";import"./activeStyles-DpG6wBQs.js";import"./useAnimationId-cL_ennFP.js";import"./Symbols-CQ03YMrb.js";import"./symbol-DcOuNSJt.js";import"./ErrorBarContext-D6qhDPP-.js";import"./SetGraphicalItem-C5CBQIUL.js";import"./ActiveShapeUtils-DgOfPYb9.js";import"./useEffectiveDataKey-CyhT1JOs.js";import"./CartesianAxis-BvwIwDWJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DQ69DYSZ.js";import"./uniqBy-D0KCbpsR.js";import"./iteratee-Bc1Rf-mx.js";import"./isArguments-yB-y1yaH.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(n,{data:s,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},lt=["UseOffset"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{r as UseOffset,lt as __namedExportsOrder,ct as default};
