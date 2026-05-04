import{e as t}from"./iframe-CSwGLTl-.js";import{S as i}from"./ChartSizeDimensions-DDHHkJGr.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-CL-IA6GV.js";import{C as c}from"./ComposedChart-D5aR39_O.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-ETNwqRkd.js";import{X as f}from"./XAxis-Cejj1aG-.js";import{Y as M}from"./YAxis-BT-Q7oTj.js";import{L as b}from"./Legend-DWU35zat.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DbJcxAkM.js";import"./immer-BjkgQKa2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-RCqgoQSn.js";import"./index-brbC5UV5.js";import"./hooks-Cr-aq8eM.js";import"./axisSelectors-B8HhzkAr.js";import"./d3-scale-CqlzxEpT.js";import"./zIndexSlice-DK1kcZUU.js";import"./renderedTicksSlice-BnadoeJ5.js";import"./CartesianChart-B2Rv6APp.js";import"./chartDataContext-ipF3cfQe.js";import"./CategoricalChart-JOHaAwTs.js";import"./Layer-D0EBgQRA.js";import"./ReactUtils-Dux8j2Wm.js";import"./Label-ClsrPG6g.js";import"./Text-D_9ONK9Z.js";import"./DOMUtils-C-NFkrvl.js";import"./ZIndexLayer-DrCWdG12.js";import"./ActivePoints-BjU36epI.js";import"./Dot-Chm2SzUE.js";import"./types-D4DhPIk-.js";import"./RegisterGraphicalItemId-hGiyGzsL.js";import"./ErrorBarContext-CbME5Fcu.js";import"./GraphicalItemClipPath-SXtIUXot.js";import"./SetGraphicalItem-p1UFOuzw.js";import"./useAnimationId-D8p9yFrw.js";import"./getRadiusAndStrokeWidthFromDot-BJuBIcOz.js";import"./ActiveShapeUtils-CIM0bDxf.js";import"./isPlainObject-DciJ0OZY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdfYyanO.js";import"./Trapezoid-D59NFDIE.js";import"./Sector-QxBrgctl.js";import"./Symbols-CiFP5VGL.js";import"./symbol-B4MVsM7L.js";import"./step-BjVh3UOw.js";import"./Curve-BKPjExFW.js";import"./CartesianAxis-DDF2MY6x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-776TLx6I.js";import"./uniqBy-UkAqSFPJ.js";import"./iteratee-7prAmQ4J.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
