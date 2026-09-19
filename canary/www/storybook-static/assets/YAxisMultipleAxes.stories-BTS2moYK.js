import{R as t}from"./iframe-EacBJx3u.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-qieo9xUf.js";import{R as l}from"./zIndexSlice-BiNX82M2.js";import{C as x}from"./ComposedChart-DLV9kOGF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C_JTEMI5.js";import{L as a}from"./Line-CgqeytmG.js";import{X as c}from"./XAxis-Cl6K2xWP.js";import{T as g}from"./Tooltip-DhPX_N6D.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DrX_jEaz.js";import"./Text-DusUwDRl.js";import"./resolveDefaultProps-Pp64jnNu.js";import"./DOMUtils-R4-PljPA.js";import"./isWellBehavedNumber-cllAzHLG.js";import"./useId-Cx3ryNMd.js";import"./useBackwardsCompatibleTheme-C878E-FF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CbjobkdE.js";import"./index-zONtSjtR.js";import"./index-Cp5XPxNK.js";import"./RechartsWrapper-DvnaJvMy.js";import"./axisSelectors-BsKbaT3c.js";import"./throttle-CQWyIvYS.js";import"./d3-scale-XN8I2g_L.js";import"./index-Cjnu8Ghr.js";import"./index-DAXn18Z3.js";import"./renderedTicksSlice-Bi45b659.js";import"./index-BWFLwSJj.js";import"./CartesianAxis-DHoeZLWk.js";import"./Layer-BUsl6vHA.js";import"./types-CDt3wtpt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CpkU4zi_.js";import"./chartDataContext-6_AZEoRj.js";import"./CategoricalChart-DR3NAbyi.js";import"./AnimatedItems-CgPok0XL.js";import"./useAnimationId-BrvpB7V7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CcRh70Ua.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D1Q_UPVj.js";import"./tooltipContext-DT1bcwJ-.js";import"./RegisterGraphicalItemId-C6xi7qpR.js";import"./ErrorBarContext-Di28pWGd.js";import"./GraphicalItemClipPath-DdpslyMR.js";import"./SetGraphicalItem-DIVfOwKJ.js";import"./getZIndexFromUnknown-DjToVp6t.js";import"./useGraphicalItemIdentity-PgG_6CLw.js";import"./Curve-DXkxZuR3.js";import"./step--LIF_hlk.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BKu6KFOZ.js";import"./Dot-Dlf7mAE0.js";import"./getRadiusAndStrokeWidthFromDot-D1gfmqoH.js";import"./useElementOffset-CW3PsA1I.js";import"./uniqBy-DulbN1k2.js";import"./iteratee-CZcssftL.js";import"./Cross-Bx1awyvz.js";import"./Sector-CXNpvmKT.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
