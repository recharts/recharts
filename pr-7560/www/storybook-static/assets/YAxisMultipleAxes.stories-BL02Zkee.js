import{R as t}from"./iframe-CkvJyCps.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DiR5kzGo.js";import{R as l}from"./zIndexSlice-Ui89VFRT.js";import{C as x}from"./ComposedChart-B_G7W1UH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-1HHzvDVH.js";import{L as a}from"./Line-BWXEwsOW.js";import{X as c}from"./XAxis-Cs2owod8.js";import{T as g}from"./Tooltip-uwTbQiHm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-mgc-X0Bi.js";import"./Layer-C4byj5K8.js";import"./resolveDefaultProps-DCKyJEY4.js";import"./Text-R9sJDfcz.js";import"./DOMUtils-CxWIP_C8.js";import"./isWellBehavedNumber-DqH8GE3H.js";import"./Label-BMESeQSE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-t0g3b6Ty.js";import"./index-BX-3EqNW.js";import"./index-BsiD65Ad.js";import"./types-CzkLD6k1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BMi6DZwf.js";import"./throttle-DgDNnF1i.js";import"./RechartsWrapper-CjY8J2vT.js";import"./index-Cjf8FZO7.js";import"./index-D8Jo1LfZ.js";import"./axisSelectors-CC2H0zuo.js";import"./d3-scale-Crqr5kEu.js";import"./CartesianChart-DFWFnz0T.js";import"./chartDataContext-BT6jQe_1.js";import"./CategoricalChart-E0pKYNLO.js";import"./tooltipContext-CE2l0mBM.js";import"./AnimatedItems-CNADXJdo.js";import"./useAnimationId-jBCdM9CL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-_yFhjmBj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlrbS-G4.js";import"./RegisterGraphicalItemId-p5LXpBOx.js";import"./ErrorBarContext-CbXX-ZBj.js";import"./GraphicalItemClipPath-Ci1KSEKS.js";import"./SetGraphicalItem-BSfhP0b_.js";import"./getZIndexFromUnknown-CAQutVKG.js";import"./graphicalItemSelectors-BppvdMk2.js";import"./Curve-OKr52WO3.js";import"./step-KO3U5RtM.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D5IySJuv.js";import"./Dot-CltbR6Uk.js";import"./getRadiusAndStrokeWidthFromDot-BhqCzyG1.js";import"./useElementOffset-cxxtLqzc.js";import"./uniqBy-BHjvX3lg.js";import"./iteratee-DA1LVjZi.js";import"./Cross-NbitfARG.js";import"./Sector-CZNNIZba.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
