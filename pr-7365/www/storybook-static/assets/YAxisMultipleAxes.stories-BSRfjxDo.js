import{e as t}from"./iframe-CivULM0O.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-ESVpGmgX.js";import{g as l}from"./arrayEqualityCheck-PbQt1vd_.js";import{C as x}from"./ComposedChart-DfjP2WwB.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-CA_IeHFY.js";import{L as a}from"./Line-BcwWxmgV.js";import{X as A}from"./XAxis-CYAQkN2U.js";import{T as g}from"./Tooltip-DgeDNHg1.js";import{R as f}from"./RechartsHookInspector-B13-Urqc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-G3eNrHbq.js";import"./Layer-BOVDUSvA.js";import"./resolveDefaultProps-Bzl3TnEc.js";import"./Text-aFIbFVfW.js";import"./DOMUtils-D-P4J5bL.js";import"./Label-BAI4tr_y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CgUDZ3al.js";import"./zIndexSlice-DI8beG-i.js";import"./immer-C3JSSs7p.js";import"./types-CYA8PCW2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DkvK2F6A.js";import"./hooks-O1Pz3D70.js";import"./axisSelectors-C5EVC_K9.js";import"./d3-scale-D4k2z_td.js";import"./RechartsWrapper-DwxV8M50.js";import"./index-D77mCZEn.js";import"./CartesianChart-DF7vNr1N.js";import"./chartDataContext-BWPeiq2n.js";import"./CategoricalChart-CaQLfBcJ.js";import"./tooltipContext-n77PxYR2.js";import"./ReactUtils-B75F0iOa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-d22AVGnL.js";import"./useAnimationId-DJJiEnXV.js";import"./ActiveShapeUtils-DzUFHSun.js";import"./RegisterGraphicalItemId-C8jduj3R.js";import"./ErrorBarContext-rnb_GXzV.js";import"./GraphicalItemClipPath-UzEv0mvn.js";import"./SetGraphicalItem-DhyPdJoF.js";import"./getZIndexFromUnknown-Ce8ZJNDV.js";import"./graphicalItemSelectors-CO4I5c3e.js";import"./Curve-CR9QitUx.js";import"./step-DozMZOeE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-De-ksHDq.js";import"./Dot-13A9yk-i.js";import"./getRadiusAndStrokeWidthFromDot-CdnZqcwv.js";import"./useElementOffset-CC9xhXxh.js";import"./uniqBy-Cwhcwtk-.js";import"./iteratee-UPOw9UnH.js";import"./Cross-P7L2JLrH.js";import"./Sector-592Fkfg8.js";import"./index-kHVaJKAG.js";import"./ChartSizeDimensions-B7zlPcNh.js";import"./OffsetShower-BTGRafEk.js";import"./PlotAreaShower-BV6yuT_Y.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
