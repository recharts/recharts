import{R as t}from"./iframe-DwOXtgzn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-b4-CuLUW.js";import{R as l}from"./zIndexSlice-Dmyle4yQ.js";import{C as x}from"./ComposedChart-BpGZdJrE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-EkDoh6ZY.js";import{L as a}from"./Line-BJ3iVMCT.js";import{X as c}from"./XAxis-VTalBozJ.js";import{T as g}from"./Tooltip-mSas_0y4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DdjJEKUq.js";import"./Layer-DB__irZe.js";import"./resolveDefaultProps-Bx4BRzZ6.js";import"./Text-CSVGnOzm.js";import"./DOMUtils-B10qim04.js";import"./isWellBehavedNumber-CHPTSSoT.js";import"./Label-CIRdFLpv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-IkkcGrga.js";import"./index-CrEwMW4H.js";import"./index-QUHlWLUZ.js";import"./types-BWK-xR3U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DOm8uXLN.js";import"./throttle-xTjEl_pc.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-mJXYZQqb.js";import"./index-ELFXx2ej.js";import"./index-bc6z-CkW.js";import"./axisSelectors-Dzpx2B0P.js";import"./d3-scale-MfXP3SuX.js";import"./CartesianChart-EebZWKim.js";import"./chartDataContext-C0SbFtj0.js";import"./CategoricalChart-D1DyaryK.js";import"./tooltipContext-DWFYrgYN.js";import"./AnimatedItems-C0i9fXY5.js";import"./useAnimationId-7jXy7qds.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Btubkh1S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bczue4Wz.js";import"./RegisterGraphicalItemId-BuwJHRgI.js";import"./ErrorBarContext-DxS1VdHw.js";import"./GraphicalItemClipPath-CjcrufCA.js";import"./SetGraphicalItem-k8fj3X8g.js";import"./getZIndexFromUnknown-Blsuxeza.js";import"./graphicalItemSelectors-1TbS7_E7.js";import"./Curve-7y6VsND5.js";import"./step-AQXoGS_1.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Lpp61Dot.js";import"./Dot-B5UvlLlr.js";import"./getRadiusAndStrokeWidthFromDot-D8rcgLH2.js";import"./useElementOffset-DbmWTPCA.js";import"./uniqBy-DBUFaqro.js";import"./iteratee-Cf9oFDWg.js";import"./Cross-Cd242lYG.js";import"./Sector-dQh5G5bh.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
