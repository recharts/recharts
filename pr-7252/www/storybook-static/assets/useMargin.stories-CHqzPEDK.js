import{e as t}from"./iframe-BXY1ZxMw.js";import{S as i}from"./ChartSizeDimensions-BO7SfmPn.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-DcA-4E3i.js";import{C as c}from"./ComposedChart-DqLYQ7wE.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-njRk575c.js";import{X as f}from"./XAxis-C1AEexQD.js";import{Y as M}from"./YAxis-BQsY6Xkn.js";import{L as b}from"./Legend-DiXCz_iN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C-HKPb9Y.js";import"./immer-BIFs4B-N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-QVGmW9.js";import"./index-3g6pKTEF.js";import"./hooks-BMNZaKTW.js";import"./axisSelectors-DujQk2mS.js";import"./d3-scale-CVGboYSt.js";import"./zIndexSlice-Ce-rItNm.js";import"./renderedTicksSlice-9b_yiBc1.js";import"./CartesianChart-RUN03By5.js";import"./chartDataContext-ktNnxBdo.js";import"./CategoricalChart-BRmwchnd.js";import"./Layer-CSlcUsPH.js";import"./ReactUtils-jvyP91Ey.js";import"./Label-DBppt7lW.js";import"./Text-khHsIcyp.js";import"./DOMUtils-DRNBButz.js";import"./ZIndexLayer-NUbH9u4P.js";import"./ActivePoints-ChJ6-xNu.js";import"./Dot-fq0sMsij.js";import"./types-6ITthLWo.js";import"./RegisterGraphicalItemId-Bn5vI_pp.js";import"./ErrorBarContext-D19syQ9l.js";import"./GraphicalItemClipPath-BRuIkpbH.js";import"./SetGraphicalItem-CZGya2Pz.js";import"./useAnimationId-CLslbl-_.js";import"./getRadiusAndStrokeWidthFromDot-BYlpFOLw.js";import"./ActiveShapeUtils-DDyUax94.js";import"./isPlainObject-CCgYT477.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BFSTpqGq.js";import"./Trapezoid-OWqREu8T.js";import"./Sector-DCuOMg7b.js";import"./Symbols-DIWprCIn.js";import"./symbol-CgR1B8Aj.js";import"./step-BxTVkj_h.js";import"./Curve-yQu46FzN.js";import"./CartesianAxis-Cu56U0d6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-OY-49NtZ.js";import"./uniqBy-COQJy0N9.js";import"./iteratee-g6hWHTNZ.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Ct=["UseMargin"];export{a as UseMargin,Ct as __namedExportsOrder,wt as default};
