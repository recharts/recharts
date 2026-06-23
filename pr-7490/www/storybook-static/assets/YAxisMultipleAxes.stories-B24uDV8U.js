import{R as t}from"./iframe-bG7_G66g.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-C7HJKNEA.js";import{R as l}from"./zIndexSlice-BYtx9lI3.js";import{C as x}from"./ComposedChart-CgJhKHi6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BzCbXELW.js";import{L as a}from"./Line-B5aT7L1s.js";import{X as c}from"./XAxis-BJQkDMRF.js";import{T as g}from"./Tooltip-DBFkYhUj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CKlYZxfa.js";import"./CartesianAxis-Dnx9Ro6b.js";import"./Layer-ky2aT-iX.js";import"./resolveDefaultProps-BJM1u8ue.js";import"./Text-BQWDG8GB.js";import"./DOMUtils-C65D4AnI.js";import"./isWellBehavedNumber-CMDCTp3P.js";import"./Label-B0PcRW41.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BRupmzoF.js";import"./index-B_EgrjTd.js";import"./index-7ZZfYU54.js";import"./types-DAUYWUcJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-0KFrvLOH.js";import"./immer-DhTjJvAV.js";import"./RechartsWrapper-BMMQbU53.js";import"./index-BEtPY2hf.js";import"./index-CrGTyESs.js";import"./axisSelectors-SAI4sVeE.js";import"./d3-scale-FKA3mwBv.js";import"./CartesianChart-VkV_7YNc.js";import"./chartDataContext-BcyTHSzL.js";import"./CategoricalChart-BHq-0gkK.js";import"./tooltipContext-ifqM4yjs.js";import"./AnimatedItems-C0ftWhjM.js";import"./useAnimationId-NfEwsoHb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xxCREvqc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BZT2pA_A.js";import"./RegisterGraphicalItemId-Bi5SE-vz.js";import"./ErrorBarContext-BmWpZ9Bv.js";import"./GraphicalItemClipPath-CwKLVu4X.js";import"./SetGraphicalItem-DrtiSYcp.js";import"./getZIndexFromUnknown-5r75UkC2.js";import"./graphicalItemSelectors-DMrbzbso.js";import"./Curve-D0BbINzH.js";import"./step-B_0-Bz-G.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CoLkUcGQ.js";import"./Dot-CaSI3883.js";import"./getRadiusAndStrokeWidthFromDot-Bb0n7Rxm.js";import"./useElementOffset-Cm17sbSB.js";import"./uniqBy-BKybyHng.js";import"./iteratee-C9qT0ecR.js";import"./Cross-BiRXyJXw.js";import"./Sector-DufLDoCk.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
