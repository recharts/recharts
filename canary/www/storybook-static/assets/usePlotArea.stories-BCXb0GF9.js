import{R as t}from"./iframe-DnFxx7IH.js";import{u as a}from"./CategoricalChart-DJUCMkjn.js";import{R as p}from"./zIndexSlice-DMQesRjL.js";import{C as s}from"./ComposedChart-nZqnVWXT.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Di-BkjaJ.js";import{X as l}from"./XAxis-IDSfm9bg.js";import{Y as h}from"./YAxis-CEWgAKNT.js";import{L as c}from"./Legend-Ca_KDK-L.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BEVhWh0t.js";import"./index-GUUQK7eb.js";import"./index-CAdU6H6S.js";import"./index-rcoyIDVk.js";import"./index-Brqhvl0Y.js";import"./throttle-D9ypYn8O.js";import"./get-C2VjdU0L.js";import"./axisSelectors-5k6UVVXW.js";import"./resolveDefaultProps-BrQSc28h.js";import"./isWellBehavedNumber-DwCdsfaa.js";import"./d3-scale-Bs_R4IxC.js";import"./renderedTicksSlice-D0pYs9KP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DEdd4Z6y.js";import"./chartDataContext-DJs6EXfK.js";import"./Layer-D_Gfp3eA.js";import"./Curve-J32t11pu.js";import"./types-BDVRIOHN.js";import"./step-Bso1aipe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C4h-Xaxi.js";import"./Label--8_ga_Yz.js";import"./Text-DMuBrTIK.js";import"./DOMUtils-L7csA6Z4.js";import"./useId-DrpNe8Nn.js";import"./useBackwardsCompatibleTheme-DDCq5JLw.js";import"./ZIndexLayer-DWUDk33_.js";import"./useAnimationId-CvbAXd24.js";import"./ActivePoints-6Gybe8Hc.js";import"./Dot-CMt5bDBr.js";import"./RegisterGraphicalItemId-CKqNw0Tr.js";import"./ErrorBarContext-UyjGsXAe.js";import"./GraphicalItemClipPath-Cr1fTws_.js";import"./SetGraphicalItem-BEKqBC8O.js";import"./getRadiusAndStrokeWidthFromDot-Dzo4OknT.js";import"./ActiveShapeUtils-DMhAfvBj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BE4Vor5z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bz-bEPn5.js";import"./symbol-B6M4kKq8.js";import"./useElementOffset-uQ8Z7oyS.js";import"./uniqBy-BPRwV-au.js";import"./iteratee-DD5UE0pF.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
