import{e as t}from"./iframe-2KzY7SZI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BdZCTlTT.js";import{R as l}from"./arrayEqualityCheck-C_KFC4aG.js";import{C as x}from"./ComposedChart-BTJVM0N_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D2w5Mx5R.js";import{L as a}from"./Line-B_bmc7jI.js";import{X as A}from"./XAxis-IZqHvSRM.js";import{T as g}from"./Tooltip-BbT-QfX0.js";import{R as f}from"./RechartsHookInspector-BfBUolA6.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-iQKBE-lF.js";import"./Layer-CDY6haxt.js";import"./resolveDefaultProps-DCkyn-XH.js";import"./Text-D9eiSsSq.js";import"./DOMUtils-qhd3ut3X.js";import"./Label-30J3b0Tu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CjxdKwx6.js";import"./zIndexSlice-DkD_gkVE.js";import"./immer-BbCSCUWa.js";import"./types-C82LLnNR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DkyMgPSK.js";import"./hooks-D41MmbXB.js";import"./axisSelectors-btICR-6o.js";import"./d3-scale-YB1UXNlF.js";import"./RechartsWrapper-6FLOJafv.js";import"./index-DWwY0oag.js";import"./CartesianChart-BjELWt2X.js";import"./chartDataContext-Cd81LqCh.js";import"./CategoricalChart-XS_rytPK.js";import"./tooltipContext-D7xp7Kjj.js";import"./ReactUtils-CP-aoZRs.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CWrruK-s.js";import"./isPlainObject-k6awtQUp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CQd-B1Q8.js";import"./useAnimationId-DwCOtHiA.js";import"./Trapezoid-BF_TMfHF.js";import"./Sector-Bhzm6McX.js";import"./Symbols-BgWJ7GGh.js";import"./symbol-D5FcbSZZ.js";import"./step-B9r6R9dH.js";import"./Curve-D8MF2fMv.js";import"./RegisterGraphicalItemId-vClWkM0Z.js";import"./ErrorBarContext-CYcgyRmM.js";import"./GraphicalItemClipPath-D6n4jgua.js";import"./SetGraphicalItem-BxWbQ_06.js";import"./getZIndexFromUnknown-BpxlkNGy.js";import"./graphicalItemSelectors-BxBOnIk5.js";import"./ActivePoints-A9eI8SQH.js";import"./Dot-D6GzpgpC.js";import"./getRadiusAndStrokeWidthFromDot-PInnfI7S.js";import"./useElementOffset-Cy_K7xEb.js";import"./uniqBy-DOsmyNAl.js";import"./iteratee-DwOYEDyO.js";import"./Cross-D75OTgsU.js";import"./index-DuC9ckfX.js";import"./ChartSizeDimensions-OFKXx0KH.js";import"./OffsetShower-C_p34O5g.js";import"./PlotAreaShower-BviaC-V-.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
