import{R as t}from"./iframe-C-jRtd4O.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BsnlIXwv.js";import{R as l}from"./zIndexSlice-C13rA1yY.js";import{C as x}from"./ComposedChart-CYkr-z0J.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BvcGoYue.js";import{L as a}from"./Line-DYmy7AmN.js";import{X as c}from"./XAxis-BUOjYmWG.js";import{T as g}from"./Tooltip-CfpuqfXQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Dovpw9_t.js";import"./Layer-0nVmjaPa.js";import"./resolveDefaultProps-hGxk2_Y7.js";import"./Text-Bq6-_dbg.js";import"./DOMUtils-BNQTHuwM.js";import"./isWellBehavedNumber-BazoxJ8k.js";import"./Label-ESmdcWMr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BPTUfBlU.js";import"./index-JIvcUmdP.js";import"./index-yCZUjS0Z.js";import"./types-DJYeJibv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice--jA8UMed.js";import"./throttle-t4hhNfzx.js";import"./RechartsThemeContext-D59rVGZ_.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CszU7DXa.js";import"./index-Cqo_qzOk.js";import"./index-CODjAUjN.js";import"./axisSelectors-CkStVnzz.js";import"./d3-scale-DJzOiobO.js";import"./CartesianChart-dpIhYASN.js";import"./chartDataContext-POKzhFjx.js";import"./CategoricalChart-DlYy8Ici.js";import"./tooltipContext-CXFMaxGq.js";import"./AnimatedItems-Dni8LwDO.js";import"./useAnimationId-CyWcqLuD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DsgzCHOI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DtJs66Wu.js";import"./RegisterGraphicalItemId-fpfKicem.js";import"./ErrorBarContext-B9gJUi0L.js";import"./GraphicalItemClipPath-BbJiOV57.js";import"./SetGraphicalItem-DdFJ0gfA.js";import"./getZIndexFromUnknown-D58bCpIj.js";import"./graphicalItemSelectors-DurAtTWi.js";import"./Curve-BSXCagUH.js";import"./step-BK85lAbe.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B23Yd9jI.js";import"./Dot-DcnRANwh.js";import"./getRadiusAndStrokeWidthFromDot-DDj4ZBfK.js";import"./useElementOffset-ByJvEw10.js";import"./uniqBy-Cg8LBFHE.js";import"./iteratee-K_oW_REd.js";import"./Cross-CgOOj4td.js";import"./Sector-Bgnqs9x5.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
