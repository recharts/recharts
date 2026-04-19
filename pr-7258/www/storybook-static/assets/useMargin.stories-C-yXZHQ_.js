import{e as t}from"./iframe-Bz2Qn6Q0.js";import{S as i}from"./ChartSizeDimensions-DcrFs19n.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-SrtJKTr1.js";import{C as c}from"./ComposedChart-DbbuyMVF.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-B0FBW4kU.js";import{X as f}from"./XAxis-0rcliQLc.js";import{Y as M}from"./YAxis-B5cQ30-7.js";import{L as b}from"./Legend-CCnvmhn5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bw6mkRAu.js";import"./immer-Bf1ANpdG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxgxCr4x.js";import"./index-XEi-vt0m.js";import"./hooks-Bn0YkRzT.js";import"./axisSelectors-Dn0P--3Q.js";import"./d3-scale-Cj0fhoc6.js";import"./zIndexSlice-MM57jocS.js";import"./renderedTicksSlice-KjJl__e1.js";import"./CartesianChart-JAhvkHqp.js";import"./chartDataContext-DBTgugHo.js";import"./CategoricalChart-M6gnVyEJ.js";import"./Layer-Bp-alVkQ.js";import"./ReactUtils-BKN20BZR.js";import"./Label-Cx92zGqb.js";import"./Text-BeGwGDIw.js";import"./DOMUtils-CfBuJ7pA.js";import"./ZIndexLayer-Ci1J2GEs.js";import"./ActivePoints-BoxMP4wY.js";import"./Dot-H2-aVAZo.js";import"./types-Bq1ywEo3.js";import"./RegisterGraphicalItemId-BDNbOxSF.js";import"./ErrorBarContext-s59o9x04.js";import"./GraphicalItemClipPath-DmsPoL2A.js";import"./SetGraphicalItem-DmI1gY5l.js";import"./useAnimationId-C0d16Qdx.js";import"./getRadiusAndStrokeWidthFromDot-9Je4pShm.js";import"./ActiveShapeUtils-Cw4OmDCr.js";import"./isPlainObject-C7eNr1WD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZ4j4B1r.js";import"./Trapezoid-BI8cfUTU.js";import"./Sector-DlNvRyQv.js";import"./Symbols-CBkGZNC5.js";import"./symbol-CWNMfYRI.js";import"./step-Dly43UW-.js";import"./Curve-DWJn7QSQ.js";import"./CartesianAxis-BokQwd-n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D3Hbl9Ub.js";import"./uniqBy-nH0hK7Do.js";import"./iteratee-C2xaFs01.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
