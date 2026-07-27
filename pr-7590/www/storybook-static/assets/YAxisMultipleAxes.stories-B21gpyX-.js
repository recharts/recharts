import{R as t}from"./iframe-DX3DoU0V.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-eJYuoSOp.js";import{R as l}from"./zIndexSlice-JZscBD-4.js";import{C as x}from"./ComposedChart-DhxdekQU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CbtwD6ve.js";import{L as a}from"./Line-Dxp5xYSo.js";import{X as c}from"./XAxis-CymymjPS.js";import{T as g}from"./Tooltip-D2Im3w3T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bl7vCDUz.js";import"./Layer-CfDkJPJv.js";import"./resolveDefaultProps-Dht9eep2.js";import"./Text-CGNeItsO.js";import"./DOMUtils-jkxXqBeu.js";import"./isWellBehavedNumber-DXPAUxYw.js";import"./Label-CcOENmHR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dcm0gV7H.js";import"./index-C9zXapq5.js";import"./index-BLWyFYv6.js";import"./types-CkeZP30w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C2lqyVGO.js";import"./throttle-Df9paSU5.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Cor7Wz0Q.js";import"./index-fiTNjDfz.js";import"./index-dfS5pTPx.js";import"./axisSelectors-CPexRmiS.js";import"./d3-scale-cmuGZbi0.js";import"./CartesianChart-DAdEh2n_.js";import"./chartDataContext-KL4_rbFV.js";import"./CategoricalChart-COC9nxGS.js";import"./tooltipContext-B8gNCXNL.js";import"./AnimatedItems-azUMJ4jR.js";import"./useAnimationId-2LcPTVkH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BknJ5SeS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C5RQzc-i.js";import"./RegisterGraphicalItemId-Dlzi8iuz.js";import"./ErrorBarContext-UMJzk-jC.js";import"./GraphicalItemClipPath-BLXFrLs-.js";import"./SetGraphicalItem-C1_wN2SK.js";import"./getZIndexFromUnknown-Bymqfo9L.js";import"./graphicalItemSelectors-BlsH2ULy.js";import"./Curve-lZ1smd7v.js";import"./step-m02rWKGn.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D6qpACIy.js";import"./Dot-DycfcH3j.js";import"./getRadiusAndStrokeWidthFromDot-BSSlkcIg.js";import"./useElementOffset-BuK6NTey.js";import"./uniqBy-B4dKXf3c.js";import"./iteratee-CB7cTIhH.js";import"./Cross-DJeHaODA.js";import"./Sector-DF69m_zr.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
