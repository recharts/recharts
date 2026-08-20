import{R as t}from"./iframe-Csa_oMfm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-tYvWvlOq.js";import{R as l}from"./zIndexSlice-BxquUHtq.js";import{C as x}from"./ComposedChart-eB5eedGT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BNalVyG7.js";import{L as a}from"./Line-CF8Pd-gQ.js";import{X as c}from"./XAxis-uDV1OEUW.js";import{T as g}from"./Tooltip-BsrPmR3i.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-KmPVqzrB.js";import"./Text-C_eX2bjG.js";import"./resolveDefaultProps-Byem5JrG.js";import"./DOMUtils-BFEBcDdR.js";import"./isWellBehavedNumber-DWOo1BMI.js";import"./useId-D1v4eS8N.js";import"./useBackwardsCompatibleTheme-D8HYBwfJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dj0ApPdW.js";import"./index-DAq0SL0A.js";import"./index-IjpwRB6F.js";import"./RechartsWrapper-CQ2cp1Au.js";import"./index-CfKNqcoW.js";import"./index-CRP06Y07.js";import"./throttle-CSxXhEFU.js";import"./axisSelectors-BG4FCknP.js";import"./d3-scale-BtpAo9Oq.js";import"./renderedTicksSlice-CaOZRI6N.js";import"./CartesianAxis-Cukq_zeL.js";import"./Layer-BKPwema6.js";import"./types-C6llbAwt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-LGWyPi5p.js";import"./chartDataContext-BH4G6z7_.js";import"./CategoricalChart-DnCPfHVF.js";import"./AnimatedItems-DNlS9_lf.js";import"./useAnimationId-C2aTUSsq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CHMSO-4U.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DtwpfCs_.js";import"./tooltipContext-Ux_aw3-4.js";import"./RegisterGraphicalItemId-BpNCJT0O.js";import"./ErrorBarContext-Ch5kSSkb.js";import"./GraphicalItemClipPath-BFLHGHAh.js";import"./SetGraphicalItem-DHDvzfH7.js";import"./getZIndexFromUnknown-CiBmCZb_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B12qC28t.js";import"./Curve-BqFDmSfU.js";import"./step-o0DAusso.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CpN93VEs.js";import"./Dot-BraMSZz_.js";import"./getRadiusAndStrokeWidthFromDot-DXCwtpcK.js";import"./useElementOffset-CbgcJIP8.js";import"./uniqBy-DJZRRRzN.js";import"./iteratee-BCfsRupd.js";import"./Cross-CvyQTzF9.js";import"./Sector-fsmInxGH.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
