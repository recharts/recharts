import{R as t}from"./iframe-S_Q04LyU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Cd8RwLuY.js";import{R as l}from"./zIndexSlice-Bxg2BBQ3.js";import{C as x}from"./ComposedChart-Bj5eSX1M.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cgnnx9ML.js";import{L as a}from"./Line-BOxz-rUw.js";import{X as c}from"./XAxis-D78GJHE5.js";import{T as g}from"./Tooltip-DnzE8zYC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DhttszFl.js";import"./Layer-gdhaFlzY.js";import"./resolveDefaultProps-Dy-13YZo.js";import"./Text-C30Me8vu.js";import"./DOMUtils-b86ja7SN.js";import"./isWellBehavedNumber-B7JVG4WI.js";import"./Label-DpgEyudD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cyu3q_2t.js";import"./index-B7fnCzo3.js";import"./index-bxbAArpl.js";import"./types-B2JQaABL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xSk0hPIv.js";import"./throttle-sJ5Xwj7N.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DllIXhjL.js";import"./index-rMJKouwD.js";import"./index-TooQEcPQ.js";import"./axisSelectors-BPn6DSnk.js";import"./d3-scale-C2cmQNtP.js";import"./CartesianChart-BKdvFgR6.js";import"./chartDataContext-pLCds2Ae.js";import"./CategoricalChart-90tJb_l9.js";import"./tooltipContext-Dkeeb5v3.js";import"./AnimatedItems-BE3OLqfb.js";import"./useAnimationId-CWYmV7EH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Qt7Z3o8D.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CQj2Q4HD.js";import"./RegisterGraphicalItemId-C_r44y5X.js";import"./ErrorBarContext-TTmfdmNR.js";import"./GraphicalItemClipPath-BhFzIWrz.js";import"./SetGraphicalItem-CmPnocAL.js";import"./getZIndexFromUnknown-DVwprQMK.js";import"./graphicalItemSelectors-DI4Jnxhi.js";import"./Curve-By1OgGZW.js";import"./step-DWBBqdOb.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D50UgDCx.js";import"./Dot-D891HGOH.js";import"./getRadiusAndStrokeWidthFromDot-CwsW4Xpc.js";import"./useElementOffset-DsJA345U.js";import"./uniqBy-BtJ9oYS7.js";import"./iteratee-DpqljlNu.js";import"./Cross-CwJEmN7U.js";import"./Sector-BeHgqQjL.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
