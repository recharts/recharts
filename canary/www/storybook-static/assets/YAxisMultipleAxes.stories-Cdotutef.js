import{R as t}from"./iframe-B5plfFOD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-GTebhYCm.js";import{R as l}from"./zIndexSlice-DbNmOY3-.js";import{C as x}from"./ComposedChart-DIa361yX.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C3ZGL78-.js";import{L as a}from"./Line-ovty_Oih.js";import{X as c}from"./XAxis-BSTDbcVl.js";import{T as g}from"./Tooltip-uZz8yr8Y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D1J3ucoA.js";import"./Text-CpDGg_G2.js";import"./resolveDefaultProps-BlDjsfrB.js";import"./DOMUtils-D6jyt4Vs.js";import"./isWellBehavedNumber-Da64mp0K.js";import"./useId-Bp2MS-0a.js";import"./useBackwardsCompatibleTheme-DbWiZjcQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-IfT3mYts.js";import"./index-PX_n5hQs.js";import"./index-CNQoj7bz.js";import"./RechartsWrapper-CGezTKFK.js";import"./index-CL4khl8X.js";import"./index-Wbnw9Fvi.js";import"./throttle-B-azr0kq.js";import"./axisSelectors-BLYlno2y.js";import"./d3-scale-DCKop38A.js";import"./renderedTicksSlice-BhrWC83q.js";import"./CartesianAxis-DCr9g_ht.js";import"./Layer-ByEseNp7.js";import"./types-BGPhMwrg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DwKWqDkX.js";import"./chartDataContext-kMO755bg.js";import"./CategoricalChart-C1LQoQak.js";import"./AnimatedItems-B1lzxzMI.js";import"./useAnimationId-B-SkX0Hu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DpWbdB20.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUhOL-u8.js";import"./tooltipContext-DnP-rmZG.js";import"./RegisterGraphicalItemId-CWna7QKU.js";import"./ErrorBarContext-CLev7xWU.js";import"./GraphicalItemClipPath-Qthp7O67.js";import"./SetGraphicalItem-CTmoE1ld.js";import"./getZIndexFromUnknown-aCBQPkRG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-8MsBpaW-.js";import"./Curve-CaJzkXTx.js";import"./step-BSKO3-IJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-0px9-aiA.js";import"./Dot-DN6yzzHr.js";import"./getRadiusAndStrokeWidthFromDot-bk7Qsl9y.js";import"./useElementOffset-D_k_9iR3.js";import"./uniqBy-C0NyoxrU.js";import"./iteratee-COozC7kh.js";import"./Cross-Cu31EOYV.js";import"./Sector-CCHpfLHh.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
