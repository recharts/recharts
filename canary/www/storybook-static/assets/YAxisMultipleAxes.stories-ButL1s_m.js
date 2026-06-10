import{R as t}from"./iframe-Sgab1gUe.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B3Csn4tH.js";import{R as l}from"./zIndexSlice-BrzbkbEI.js";import{C as x}from"./ComposedChart-DQqePUzc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BkFeW9r4.js";import{L as a}from"./Line-BamkpRBx.js";import{X as c}from"./XAxis-Be4f_XLH.js";import{T as g}from"./Tooltip-Cqjxr8eG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BJyukGiE.js";import"./CartesianAxis-s1UQ10e0.js";import"./Layer-Dy3UQ8V8.js";import"./resolveDefaultProps-CNXENHcX.js";import"./Text-Bwmob33r.js";import"./DOMUtils-CmwtFJfy.js";import"./isWellBehavedNumber-CJXdc3tU.js";import"./Label-pFFfknml.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBRcOItw.js";import"./index-BLkVzwy_.js";import"./index-90Rz6XAP.js";import"./types-CA2ETL4c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CVwVFFGF.js";import"./immer-jmjMSL8D.js";import"./RechartsWrapper-DTduNXvU.js";import"./index-BkOZFEZb.js";import"./index-BsnSQtU-.js";import"./axisSelectors-8GhzU9TS.js";import"./d3-scale-Bg12AftI.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CY44eXB-.js";import"./chartDataContext-NIXL8iaZ.js";import"./CategoricalChart-DwEPGx0k.js";import"./tooltipContext-DiIFYHNf.js";import"./AnimatedItems-CFJVJstG.js";import"./useAnimationId-D0bn0X4e.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CGR64IYi.js";import"./ActiveShapeUtils-CypivSKC.js";import"./RegisterGraphicalItemId-BSYxTo0u.js";import"./ErrorBarContext-WB4epqm3.js";import"./GraphicalItemClipPath-BB2uZM8Q.js";import"./SetGraphicalItem-Cu_IpSGW.js";import"./getZIndexFromUnknown-BmwQbQid.js";import"./graphicalItemSelectors-B2HDnJwF.js";import"./Curve-DfhFB3Po.js";import"./step-CWFXO9ga.js";import"./path-DyVhHtw_.js";import"./ActivePoints-_LL_I5Qc.js";import"./Dot-BvExYRbB.js";import"./getRadiusAndStrokeWidthFromDot-bqVMqQYj.js";import"./useElementOffset-aoLYr1Hs.js";import"./uniqBy-D-eprie9.js";import"./iteratee-DfxU7rfy.js";import"./Cross-BAllvjaw.js";import"./Sector-D8fKowAH.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
