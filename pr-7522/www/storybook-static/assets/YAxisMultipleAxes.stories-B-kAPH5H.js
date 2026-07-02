import{R as t}from"./iframe-BieQWE3D.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-ChNLm74a.js";import{R as l}from"./zIndexSlice-BYxygo-S.js";import{C as x}from"./ComposedChart-NGCBYeb_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BgC33EeK.js";import{L as a}from"./Line-2mh_gerJ.js";import{X as c}from"./XAxis-G4vRwmKg.js";import{T as g}from"./Tooltip-ud6--Qhj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DpF5IQ2O.js";import"./Layer-NUCJMvF3.js";import"./resolveDefaultProps-0J6uDFJb.js";import"./Text-DkEmFVu0.js";import"./DOMUtils-B828G3hP.js";import"./isWellBehavedNumber-By2uQy27.js";import"./Label-D0PWYGmJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BHodRoAu.js";import"./index-DS0rELK-.js";import"./index-CiDtTrDL.js";import"./types-CIzADBdv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWxb2yva.js";import"./throttle-C6pqxX0n.js";import"./RechartsWrapper-BQPdhE90.js";import"./index-BK9-NO1n.js";import"./index-D3zDokgn.js";import"./axisSelectors-CKN_GV_q.js";import"./d3-scale-Sw7i2UsL.js";import"./CartesianChart-D6JA1RXb.js";import"./chartDataContext-DiNSnyrd.js";import"./CategoricalChart-BTFUnlUn.js";import"./tooltipContext-COzl_PjR.js";import"./AnimatedItems-fhCf9-7A.js";import"./useAnimationId-3OlCfqca.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-2NfmC8rx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZK7c2Ij.js";import"./RegisterGraphicalItemId-DxgNfXcN.js";import"./ErrorBarContext-D6txdMKi.js";import"./GraphicalItemClipPath-O6SSxJbU.js";import"./SetGraphicalItem-ucOefQZ-.js";import"./getZIndexFromUnknown-DR8hrgQK.js";import"./graphicalItemSelectors-CY30Tz3v.js";import"./Curve-SVdp-0Yk.js";import"./step-DHAVsB3S.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DO-UWoAa.js";import"./Dot-80pmkl_3.js";import"./getRadiusAndStrokeWidthFromDot-BzkGhJ7K.js";import"./useElementOffset-DsSZYmDt.js";import"./uniqBy-CU_ixT1X.js";import"./iteratee-WoDKDUag.js";import"./Cross-DbjBe-Jq.js";import"./Sector-WfPlP255.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
