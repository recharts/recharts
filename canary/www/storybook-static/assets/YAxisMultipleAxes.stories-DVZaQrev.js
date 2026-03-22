import{e as t}from"./iframe-m8q5t3md.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-3rVJTeb7.js";import{R as l}from"./arrayEqualityCheck-DrSDqkLD.js";import{C as x}from"./ComposedChart-mWV3_oXN.js";import{B as o}from"./Bar-DNkE7vw6.js";import{L as a}from"./Line-D8kr-aJg.js";import{X as c}from"./XAxis-D9s1UdL9.js";import{T as A}from"./Tooltip-90TwBl0w.js";import{R as g}from"./RechartsHookInspector-BuC1LeAm.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B_P6O2DK.js";import"./Layer-C2TdqJIe.js";import"./resolveDefaultProps-CRYHZjsP.js";import"./Text-CGYPmi9L.js";import"./DOMUtils-BVQX-RMY.js";import"./Label-JUKbE3JW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMbN4Jmp.js";import"./zIndexSlice-BFsJzxfG.js";import"./immer-DMxbvvOq.js";import"./types-C2IIvjb3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-2vEKdn9I.js";import"./hooks-nzhcMf4x.js";import"./axisSelectors-DSejHMOb.js";import"./d3-scale-CmP5dk1L.js";import"./RechartsWrapper-CZ3jmele.js";import"./index-BL9S6rdM.js";import"./CartesianChart-B3HJKIVC.js";import"./chartDataContext-CB7kvdLo.js";import"./CategoricalChart-CgU5MazA.js";import"./tooltipContext-BoRlh4FZ.js";import"./ReactUtils-Dcz365jx.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BuaI6NWG.js";import"./isPlainObject-glNQFXom.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-HTdxKaWE.js";import"./useAnimationId-Cp-1L-xj.js";import"./Trapezoid-YBhqI0fM.js";import"./Sector-CqOCHMeq.js";import"./Symbols-Dl-fcwHF.js";import"./symbol-Cmq7mipq.js";import"./step-BQd-JXh1.js";import"./Curve-Clnct1hH.js";import"./RegisterGraphicalItemId-QDXXrpkb.js";import"./ErrorBarContext-ExRYnIf4.js";import"./GraphicalItemClipPath-JhKOKnEz.js";import"./SetGraphicalItem-DTrTlaD3.js";import"./getZIndexFromUnknown-CFoIEHkk.js";import"./graphicalItemSelectors-yLfxVKlo.js";import"./ActivePoints-D3DuYUxN.js";import"./Dot--mgd1LbI.js";import"./getRadiusAndStrokeWidthFromDot-xB2-LwJw.js";import"./useElementOffset-qS0vSeWD.js";import"./uniqBy-CPILqBye.js";import"./iteratee-F2kSi97o.js";import"./Cross-CYwIqPwl.js";import"./index-B_d56yGA.js";import"./ChartSizeDimensions-IBUPmonY.js";import"./OffsetShower-qDjcRr8n.js";import"./PlotAreaShower-CM2PEioy.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
