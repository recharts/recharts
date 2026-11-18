import{R as t}from"./iframe-DnRkZCcZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CL5uWkoX.js";import{R as l}from"./zIndexSlice-DwWcIzrA.js";import{C as x}from"./ComposedChart-DAKOEFgJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D-jxt40_.js";import{L as a}from"./Line-B-2uuZK0.js";import{X as c}from"./XAxis-DPYXDMnu.js";import{T as g}from"./Tooltip-wJ4R_9Xj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DX2yrrpT.js";import"./Text-CdYpRkXo.js";import"./resolveDefaultProps-CKyaaGET.js";import"./ZIndexLayer-Cfgieq6O.js";import"./index-B8arTVtL.js";import"./index-D7PdTPCI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-WP4kwRUA.js";import"./throttle-bNdHLYfF.js";import"./axisSelectors-BG0FGZa0.js";import"./d3-scale-DjImCkyz.js";import"./CartesianAxis-CI0fZc9H.js";import"./Layer-ziHQUSdD.js";import"./types-DV0KiZQI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-qkBzJXk3.js";import"./index-Cppy_ggM.js";import"./index-BXa8wql-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B9w9bgII.js";import"./index-BKTGKznB.js";import"./fillDefinitions-B6SeDiRz.js";import"./CartesianChart-lnVa2-zz.js";import"./chartDataContext-C9AcD8jJ.js";import"./CategoricalChart-DJEPvlGT.js";import"./dataEntryStyles-BgjT13Al.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EcRxuzMl.js";import"./useAnimationId-p0AfOAw0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sdvrDPyr.js";import"./tooltipContext-BZHxRJ23.js";import"./ErrorBarContext-DvYBBAjF.js";import"./activeStyles-DRi4KJX5.js";import"./SetGraphicalItem-Cr3rFtC8.js";import"./getZIndexFromUnknown-Bisk8cmQ.js";import"./useEffectiveDataKey-BIuaq2EX.js";import"./omit-ZFBqXXNM.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CMeF7NbT.js";import"./Curve-QoxdgH9q.js";import"./step-CKBO-I2d.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CRsFnWGy.js";import"./Dot-CK54vFWX.js";import"./Symbols-DOGEiW8S.js";import"./symbol-BhVTcXut.js";import"./useElementOffset-DMMTuYam.js";import"./uniqBy-DI2IzLG0.js";import"./iteratee-guzWnx9p.js";import"./Cross-p5xAMhDn.js";import"./Sector-BXNROzdl.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
