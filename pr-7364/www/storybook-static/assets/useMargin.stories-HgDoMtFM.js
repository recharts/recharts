import{e as t}from"./iframe-Cv0qW2ko.js";import{S as i}from"./ChartSizeDimensions-CCGNwFzu.js";import{ah as p,ac as g,ae as h,g as l}from"./arrayEqualityCheck-dw2UPZEJ.js";import{C as c}from"./ComposedChart-smS6LLp1.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-G_mcTi4c.js";import{X as f}from"./XAxis-BT82JTqb.js";import{Y as M}from"./YAxis-B0w9h5lM.js";import{L as b}from"./Legend-DddRhEKx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Do4zKK3Y.js";import"./immer-BQQ92H22.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-dCBWaPWI.js";import"./index-B3dmmAiW.js";import"./hooks-CJSe3LTj.js";import"./axisSelectors-C2eMQvfK.js";import"./d3-scale-Dsb1SLZO.js";import"./zIndexSlice-CHCTzA5s.js";import"./renderedTicksSlice-BOF6sMGg.js";import"./CartesianChart-DqdcaXnI.js";import"./chartDataContext-Cp9nHQ3M.js";import"./CategoricalChart-QPWmKUQ6.js";import"./Curve-Bz0VDg5l.js";import"./types-D0-2-__S.js";import"./step-BgXTWRgv.js";import"./path-DyVhHtw_.js";import"./Layer-CsQNRvLO.js";import"./ReactUtils-pum_VzDZ.js";import"./Label-BMEmaXKp.js";import"./Text-DZAUevoT.js";import"./DOMUtils-CHQYQ4Y1.js";import"./ZIndexLayer-DcdIn6Lk.js";import"./ActivePoints-BU1jJ3Mc.js";import"./Dot--rMp3x47.js";import"./RegisterGraphicalItemId-DphlggEW.js";import"./ErrorBarContext-DcaWRm0D.js";import"./GraphicalItemClipPath-CyQi9Ewc.js";import"./SetGraphicalItem-tehWRJf-.js";import"./useAnimationId-CYCjPTVx.js";import"./getRadiusAndStrokeWidthFromDot-BMewwEnB.js";import"./ActiveShapeUtils-DtjFfAfB.js";import"./CartesianAxis-BZyagfMs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BZ1fsnkh.js";import"./symbol-C6znSeY2.js";import"./useElementOffset-DvAKpVC2.js";import"./uniqBy-DEfTIPXQ.js";import"./iteratee-BiY_dFh3.js";function E(){const r=p(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const ft={title:"API/hooks/useMargin",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
