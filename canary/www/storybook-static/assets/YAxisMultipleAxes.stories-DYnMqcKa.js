import{R as t}from"./iframe-Byz0CZgU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-jlA8Ias5.js";import{R as l}from"./zIndexSlice-DotL-Jp7.js";import{C as x}from"./ComposedChart-C88qarp6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BZq8m0ZK.js";import{L as a}from"./Line-CzBaFcfy.js";import{X as c}from"./XAxis-BUPL4hjC.js";import{T as g}from"./Tooltip-DSf6lPPV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B3F7THN1.js";import"./Layer-jJo0ut9m.js";import"./resolveDefaultProps-DuQSjIkO.js";import"./Text-DEkD8bId.js";import"./DOMUtils-DwTCLKyl.js";import"./isWellBehavedNumber-B1YKzF79.js";import"./Label-DuUl9C5P.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaxIl4jI.js";import"./index-CK-fZH2A.js";import"./index-CQCdoqal.js";import"./types-DE0YJD6S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BW0ZnHiJ.js";import"./throttle-4aokm5Ko.js";import"./RechartsThemeContext-DfGqi-Ay.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-D5qdTAip.js";import"./index-CNmE48Wz.js";import"./index-D4FuUZjH.js";import"./axisSelectors-CN4g76wg.js";import"./d3-scale-D3FDPfRZ.js";import"./CartesianChart-QxAb7wSw.js";import"./chartDataContext-E1G0KTyW.js";import"./CategoricalChart-Dqx0x7Kl.js";import"./tooltipContext-ahP9ZnaZ.js";import"./AnimatedItems-2XdTa_Uh.js";import"./useAnimationId-CqGGvgKC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lPqfXVFD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-RF04AL4M.js";import"./RegisterGraphicalItemId-CPoQFzzX.js";import"./ErrorBarContext-D4-M1cf3.js";import"./GraphicalItemClipPath-CC2ibiyE.js";import"./SetGraphicalItem-D0qKavYL.js";import"./getZIndexFromUnknown-CWojjiYB.js";import"./graphicalItemSelectors-CtWClP3j.js";import"./Curve-BcJaCZSu.js";import"./step-Cb3pk4Rp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CwZhWFk3.js";import"./Dot-B1fpIP2w.js";import"./getRadiusAndStrokeWidthFromDot-BTyL3OgJ.js";import"./useElementOffset-Dpa0V5po.js";import"./uniqBy-BOokmjAX.js";import"./iteratee-JxZPr5ba.js";import"./Cross-LlvlF_v1.js";import"./Sector-CGH0r-5N.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
