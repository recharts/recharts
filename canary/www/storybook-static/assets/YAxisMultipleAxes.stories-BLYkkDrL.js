import{R as t}from"./iframe-DgKiVndY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DbeD2sP7.js";import{R as l}from"./zIndexSlice-dNuJcHRn.js";import{C as x}from"./ComposedChart-ZptqdVYs.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BqidhIqf.js";import{L as a}from"./Line-BTleYBWw.js";import{X as c}from"./XAxis-BLbqPkVx.js";import{T as g}from"./Tooltip-B0uI2fv_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dw6GSad7.js";import"./Text-CbY3j4Ck.js";import"./resolveDefaultProps-D4xdWGM2.js";import"./DOMUtils-DDi-aYdE.js";import"./isWellBehavedNumber-D3WetmgY.js";import"./useId-DRmEtgtu.js";import"./useBackwardsCompatibleTheme-CVo9PiuG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CiPL_m_c.js";import"./index-ClqqO2lb.js";import"./index-DJwO8k8A.js";import"./RechartsWrapper-CVLdrR-G.js";import"./axisSelectors-IaZq8uO9.js";import"./throttle-C4KEmVOQ.js";import"./d3-scale-DcAUA4PB.js";import"./index-DtVHhaCV.js";import"./index-DmBw5bKk.js";import"./renderedTicksSlice-RB0exVxa.js";import"./index-CkxJWCtX.js";import"./CartesianAxis-O82DChWw.js";import"./Layer-CitR-d8V.js";import"./types-BGF6RwMG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BjKzNNSZ.js";import"./chartDataContext-Dv6GfWKh.js";import"./CategoricalChart-tj-0AtFI.js";import"./AnimatedItems-t-O5cYrN.js";import"./useAnimationId-Df1EENv3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C7PgJRAr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-A4Sw_vLw.js";import"./tooltipContext-Br61voC1.js";import"./RegisterGraphicalItemId-D1zFL55b.js";import"./ErrorBarContext-D4mtJzrM.js";import"./GraphicalItemClipPath-CbvSbhMn.js";import"./SetGraphicalItem-BLJqw_fJ.js";import"./getZIndexFromUnknown-D1tG7Oz6.js";import"./useGraphicalItemIdentity-Mjj8dgtd.js";import"./Curve-Pc89hUhq.js";import"./step-1uXQ1327.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CK7oXB-L.js";import"./Dot-0PmoZJ73.js";import"./getRadiusAndStrokeWidthFromDot-CJC1hcgF.js";import"./useElementOffset-D6g0REY2.js";import"./uniqBy-hF-kPyhu.js";import"./iteratee-CxgRG3tb.js";import"./Cross-C_QZfsze.js";import"./Sector-DMov75Se.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
