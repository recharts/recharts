import{e as t}from"./iframe-CWtGA3nN.js";import{S as i}from"./ChartSizeDimensions-BdcGth4f.js";import{ah as p,ac as g,ae as h,g as l}from"./arrayEqualityCheck-SSZ_TbBR.js";import{C as c}from"./ComposedChart-C0UtoPhu.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-DlLocPs1.js";import{X as f}from"./XAxis-DW0rJY1W.js";import{Y as M}from"./YAxis-BNqIiiyx.js";import{L as b}from"./Legend-DJu-WPPA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DAVWEwBG.js";import"./immer-BFspOnss.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BtFvOF_N.js";import"./index-CJJNMar2.js";import"./hooks-2GkvPwk3.js";import"./axisSelectors-B2ypiSef.js";import"./d3-scale-QF4ItY9H.js";import"./zIndexSlice-DXFiHolo.js";import"./renderedTicksSlice-dpcUCF55.js";import"./CartesianChart-CjBRb4BQ.js";import"./chartDataContext-BDE8JW6h.js";import"./CategoricalChart-VkWulsmh.js";import"./Curve-SkiaV8u-.js";import"./types-DgK_EaWG.js";import"./step-CBW02vKx.js";import"./path-DyVhHtw_.js";import"./Layer-CPnmijdU.js";import"./ReactUtils-JfqC4NUj.js";import"./Label-C--aO5Ak.js";import"./Text-C8joD4Pq.js";import"./DOMUtils-CParKcwz.js";import"./ZIndexLayer-DtffmqPt.js";import"./ActivePoints-DkGt118u.js";import"./Dot-CP0aaNdE.js";import"./RegisterGraphicalItemId-6R0wFFYv.js";import"./ErrorBarContext-Bkb8bdCY.js";import"./GraphicalItemClipPath-636H-9xI.js";import"./SetGraphicalItem-DcEByKaS.js";import"./useAnimationId-B0ac7aow.js";import"./getRadiusAndStrokeWidthFromDot-Df0eg7nC.js";import"./ActiveShapeUtils-CdHtuYAv.js";import"./CartesianAxis-Bxj1i8r5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C5EGHUxC.js";import"./symbol-CZfqmVoY.js";import"./useElementOffset-DXnmGdlu.js";import"./uniqBy-B6g5sB3v.js";import"./iteratee-MnyvU_G3.js";function E(){const r=p(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const ft={title:"API/hooks/useMargin",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <MarginShower />
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
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Mt=["UseMargin"];export{a as UseMargin,Mt as __namedExportsOrder,ft as default};
