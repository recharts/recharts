import{e as t}from"./iframe-Gbg_l78M.js";import{S as i}from"./ChartSizeDimensions-BLrRxRyE.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-B69LB4m3.js";import{C as c}from"./ComposedChart-B2lIhwzo.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-4pnz_hNM.js";import{X as f}from"./XAxis-DY33qp1b.js";import{Y as M}from"./YAxis-DZDs3GKO.js";import{L as b}from"./Legend-C9X7UUEv.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-sMeqIZjn.js";import"./immer-mU5ngVSZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B733cAvp.js";import"./index-Ck6DfcF7.js";import"./hooks-BX9UIUih.js";import"./axisSelectors-BhOsWb8H.js";import"./d3-scale-B1Xdl3mZ.js";import"./zIndexSlice-BsUMgwVy.js";import"./renderedTicksSlice-CfnOktJ2.js";import"./CartesianChart-D0_pR8lQ.js";import"./chartDataContext-DKgbTOGI.js";import"./CategoricalChart-CF19xo_7.js";import"./Layer-BI5znRpT.js";import"./ReactUtils-BEyTjZ-J.js";import"./Label-C97vZCUD.js";import"./Text-BbIMZo50.js";import"./DOMUtils-BEdmeFzJ.js";import"./ZIndexLayer-Cu_ZYhKd.js";import"./ActivePoints-CLdEaCHn.js";import"./Dot-DiubYT5n.js";import"./types-6-jxyL20.js";import"./RegisterGraphicalItemId-B4Pbzoa5.js";import"./ErrorBarContext-muYUytku.js";import"./GraphicalItemClipPath-C6vmlIdz.js";import"./SetGraphicalItem-BeRS8RAb.js";import"./useAnimationId-FFZ8e1iF.js";import"./getRadiusAndStrokeWidthFromDot-qW4tViY-.js";import"./ActiveShapeUtils-BF5Ec1rO.js";import"./isPlainObject-C5_xiZ-_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ao9F5Oc0.js";import"./Trapezoid-B9yBSbp-.js";import"./Sector-NBw4H--I.js";import"./Symbols-DdxMLZNU.js";import"./symbol-gfqsi-zR.js";import"./step-BMA_kAfe.js";import"./Curve-CLZ73sU1.js";import"./CartesianAxis-Dca3a3op.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-B5ago7eB.js";import"./uniqBy-D3sIEuXx.js";import"./iteratee-Bz9748e7.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
