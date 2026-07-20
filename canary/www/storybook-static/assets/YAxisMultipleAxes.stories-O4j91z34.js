import{R as t}from"./iframe-C7qTZtPI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BIekQKnh.js";import{R as l}from"./zIndexSlice-BcOfmYYd.js";import{C as x}from"./ComposedChart-C_NHVXsk.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BRaGn58v.js";import{L as a}from"./Line-mFW-YMe2.js";import{X as c}from"./XAxis-CgvkfXIs.js";import{T as g}from"./Tooltip-DjXwA_pN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C2LUMKQN.js";import"./Layer-y2Nfuyvg.js";import"./resolveDefaultProps-Ce1865_D.js";import"./Text-BCZsvPKZ.js";import"./DOMUtils-DEhyc4Rj.js";import"./isWellBehavedNumber-D1UA-S7t.js";import"./Label-DS1cnk1C.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B8jqXSnt.js";import"./index-BL1FkC_h.js";import"./index-cjepjzxR.js";import"./types-Bx79eQJf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CqCAs39i.js";import"./throttle-DLOScDmO.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-o9fcaOJn.js";import"./index-DzpRwwXn.js";import"./index-Bl3ZtZEI.js";import"./axisSelectors-vHpYaHv4.js";import"./d3-scale-BJE91LPh.js";import"./CartesianChart-CYC5HkCy.js";import"./chartDataContext-B2ck_4kp.js";import"./CategoricalChart-DlWBLDD7.js";import"./tooltipContext-DGawLjrK.js";import"./AnimatedItems-HRihbpAW.js";import"./useAnimationId-D4WzgVDK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DuJIsTif.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJUH9QkP.js";import"./RegisterGraphicalItemId-hstJQcJh.js";import"./ErrorBarContext-BiuHMfT3.js";import"./GraphicalItemClipPath-CJL-G-6t.js";import"./SetGraphicalItem-B6Vsn-QI.js";import"./getZIndexFromUnknown-Cjl7GCXK.js";import"./graphicalItemSelectors-DidJxMin.js";import"./Curve-DiMbH13e.js";import"./step-THYeIvAN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-GVhqjKv2.js";import"./Dot-nbmu8EHp.js";import"./getRadiusAndStrokeWidthFromDot-DdigNmch.js";import"./useElementOffset-Cn8CKhYV.js";import"./uniqBy-CXC3IJo1.js";import"./iteratee-lJbmW7AH.js";import"./Cross-r9dRIJ36.js";import"./Sector-Bw-KTzAh.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
