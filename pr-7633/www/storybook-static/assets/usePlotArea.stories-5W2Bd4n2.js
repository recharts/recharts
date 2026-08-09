import{R as t}from"./iframe-D9rYPFI6.js";import{u as a}from"./CategoricalChart-BTp1W0gj.js";import{R as p}from"./zIndexSlice-C3wsTrp9.js";import{C as s}from"./ComposedChart-CrPVcAMK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CfToshCO.js";import{X as l}from"./XAxis-QgJPS01w.js";import{Y as h}from"./YAxis-9YjsfZpB.js";import{L as c}from"./Legend-fN0LFk7B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DraVZS0h.js";import"./index-BwM3wMsV.js";import"./index-BxIft0ja.js";import"./index-CBOJEfGe.js";import"./index-D-oLxkfn.js";import"./throttle-JMn6s7-r.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BEMJ5G3d.js";import"./resolveDefaultProps-ULtnpSod.js";import"./isWellBehavedNumber-wns85k-s.js";import"./d3-scale-CWZ2NBQb.js";import"./renderedTicksSlice-BQcf9eI6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CbCZKRVf.js";import"./chartDataContext-C9SNw5Kb.js";import"./Layer-Dvgn5PDs.js";import"./Curve-BFrR0D3S.js";import"./types-BrxWVo-u.js";import"./step-C1GSzIMp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-JH_MyxHu.js";import"./Label-VP1_-jlA.js";import"./Text-CPEEagO_.js";import"./DOMUtils-DnqcKz1X.js";import"./ZIndexLayer-CJhkiIkj.js";import"./useAnimationId-CBJcnsSW.js";import"./ActivePoints-BOg4hwaZ.js";import"./Dot-DA1K4FFV.js";import"./RegisterGraphicalItemId-Can_TNgi.js";import"./ErrorBarContext-v151GJ1I.js";import"./GraphicalItemClipPath-CiKUQeNX.js";import"./SetGraphicalItem-AXc71c8D.js";import"./getRadiusAndStrokeWidthFromDot-DWbL5obz.js";import"./ActiveShapeUtils-yvf6fJP9.js";import"./RechartsThemeContext-CrN5KJo6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-vGmXII6H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DLmN9lpr.js";import"./symbol-DdMz1eK0.js";import"./useElementOffset--j3qp99z.js";import"./uniqBy-Bk1kDvWW.js";import"./iteratee-D78jpAQO.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
