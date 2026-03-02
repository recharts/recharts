import{e as t}from"./iframe-DJ6q0UO-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-BkUPDN4D.js";import{R as l}from"./arrayEqualityCheck-BTG2-4hW.js";import{C as x}from"./ComposedChart-C7rLgjOW.js";import{B as o}from"./Bar-B7Y_r55G.js";import{L as a}from"./Line-6rxOW2Ea.js";import{X as c}from"./XAxis-DlTasNrE.js";import{T as A}from"./Tooltip-B8xzSfu7.js";import{R as g}from"./RechartsHookInspector-CMjN7xhZ.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CbTmm20n.js";import"./Layer-DYjtWcck.js";import"./resolveDefaultProps-ClNXOKlU.js";import"./Text-DLyfATo-.js";import"./DOMUtils-DG6JE6vP.js";import"./Label-Cfw2XXr5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-nrCDqpeq.js";import"./zIndexSlice-BmNGt8JH.js";import"./immer-DZ05EljQ.js";import"./types-Ds0jwWEi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D51KP5us.js";import"./hooks-BoprsZkg.js";import"./axisSelectors-tM2Ez228.js";import"./d3-scale-_iIYR1pZ.js";import"./RechartsWrapper-CC4bWY2k.js";import"./index-h_islmiW.js";import"./CartesianChart-CehgIYHu.js";import"./chartDataContext-CvUYCtAC.js";import"./CategoricalChart-CFoaXUlO.js";import"./tooltipContext-BTNw1VO2.js";import"./ReactUtils-eTAsrJ6L.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BXYjh8cu.js";import"./isPlainObject-BG7kj9kW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BMamn6k9.js";import"./useAnimationId-DdUAPJ1J.js";import"./Trapezoid-BT8qRaiE.js";import"./Sector-CzkjfA5d.js";import"./Symbols-CZ9XpzM5.js";import"./symbol-C9svRAEA.js";import"./step-B8mY4Wsq.js";import"./Curve-CUiTauC8.js";import"./RegisterGraphicalItemId-CMX_3-4x.js";import"./ErrorBarContext-Dz-CTdIG.js";import"./GraphicalItemClipPath-DQW1wzar.js";import"./SetGraphicalItem-DKRiAGC0.js";import"./getZIndexFromUnknown-BUVxoklA.js";import"./graphicalItemSelectors-DXspcLFK.js";import"./ActivePoints-BPWixHwU.js";import"./Dot-p8yv5QeN.js";import"./getRadiusAndStrokeWidthFromDot-BC9cTS7x.js";import"./useElementOffset-CJyvxuvG.js";import"./uniqBy-C3Jxz-Ql.js";import"./iteratee-Czc_ZmrW.js";import"./Cross-C88OEKkD.js";import"./index-Drj3rz67.js";import"./ChartSizeDimensions-Az2tJg6r.js";import"./OffsetShower-FoNPoJYn.js";import"./PlotAreaShower-DMVJxorS.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
              <RechartsHookInspector />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
