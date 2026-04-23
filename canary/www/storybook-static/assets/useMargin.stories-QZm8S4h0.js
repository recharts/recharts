import{e as t}from"./iframe-9z1u-Aav.js";import{S as i}from"./ChartSizeDimensions-Dl068BxX.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-BxC1vNgX.js";import{C as c}from"./ComposedChart-BYDqkFXo.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-Eu88whDC.js";import{X as f}from"./XAxis-40ikClNA.js";import{Y as M}from"./YAxis-DrCwJ6Az.js";import{L as b}from"./Legend-B3VISwut.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-hYLPXQk1.js";import"./immer-Bw5e914R.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCPy8B0Q.js";import"./index-B2EC147Y.js";import"./hooks-6Kt3djxY.js";import"./axisSelectors-COp_2eg-.js";import"./d3-scale-Gw1yRTSk.js";import"./zIndexSlice-CgHKAdAg.js";import"./renderedTicksSlice-BHud9xuy.js";import"./CartesianChart-BYVE1KsL.js";import"./chartDataContext-C3cOG7oG.js";import"./CategoricalChart-BSBYVT05.js";import"./Layer-CQ8qv4WV.js";import"./ReactUtils-BhZgkjsQ.js";import"./Label-CLPrmfez.js";import"./Text-hlTX4MHR.js";import"./DOMUtils-C8Hk5ID2.js";import"./ZIndexLayer-DD6-9cCr.js";import"./ActivePoints-BrNY2xuv.js";import"./Dot-Bkkq57cb.js";import"./types-DkmL6Els.js";import"./RegisterGraphicalItemId-BFftKPbg.js";import"./ErrorBarContext-C3IrAAAi.js";import"./GraphicalItemClipPath-BPP11Y5p.js";import"./SetGraphicalItem-DhXUBNxa.js";import"./useAnimationId-DEUiQ2FH.js";import"./getRadiusAndStrokeWidthFromDot-OHnzfSYw.js";import"./ActiveShapeUtils-Dr5kvCCk.js";import"./isPlainObject-C-oBiTzF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BL9Pth1-.js";import"./Trapezoid-Cob3LyNG.js";import"./Sector-Blap6T8q.js";import"./Symbols-Do-WoS-v.js";import"./symbol-CozNTkvH.js";import"./step-DgnayOtY.js";import"./Curve-CaIVque-.js";import"./CartesianAxis-CCI6UuOV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CgJ9LAWC.js";import"./uniqBy-klSQtmRp.js";import"./iteratee-CZCXTLGV.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
