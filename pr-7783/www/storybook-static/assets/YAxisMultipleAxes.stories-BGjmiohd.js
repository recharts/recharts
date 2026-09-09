import{R as t}from"./iframe-DzgNGLlq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-TE47wPZ7.js";import{R as l}from"./zIndexSlice-CTnIst4D.js";import{C as x}from"./ComposedChart-BLITsJxL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CqYxz51s.js";import{L as a}from"./Line-DUp_JOgK.js";import{X as c}from"./XAxis-Cw-Rs66g.js";import{T as g}from"./Tooltip-vVLQQKgj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B2-HhKmy.js";import"./Text-Cmcmp6Rw.js";import"./resolveDefaultProps-CaF46lB1.js";import"./DOMUtils-qoFWhjfZ.js";import"./isWellBehavedNumber-BgtbXlLK.js";import"./useId-lk8BfN7M.js";import"./useBackwardsCompatibleTheme-CWFDA9S4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BSDazUEj.js";import"./index-BQnnRDe7.js";import"./index-8oVCWn1c.js";import"./RechartsWrapper-CboTFEd7.js";import"./axisSelectors-94eYl4rY.js";import"./throttle-uLx0gES7.js";import"./d3-scale-yT9SK4Da.js";import"./index-C14b3CKC.js";import"./index-Xa_KNetQ.js";import"./renderedTicksSlice-Bkx7Xpqk.js";import"./index-Dbv9pvOZ.js";import"./CartesianAxis-Cz79nqzF.js";import"./Layer-OlcmJ5EJ.js";import"./types-jKlbb9F_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dev9z_OT.js";import"./chartDataContext-BBsc4T1N.js";import"./CategoricalChart-CJCvkzIF.js";import"./AnimatedItems-Cm23KMMu.js";import"./useAnimationId-CKHGdmz-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Chy5A9Vo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O11gFqO3.js";import"./tooltipContext-Bvg8AaqK.js";import"./RegisterGraphicalItemId-CGkeXCMx.js";import"./ErrorBarContext-BTHVw71_.js";import"./GraphicalItemClipPath-0iLoH1-r.js";import"./SetGraphicalItem-BCo8L_08.js";import"./getZIndexFromUnknown-ubDi66MJ.js";import"./useGraphicalItemIdentity-BAh9vCkO.js";import"./Curve-jqISDG95.js";import"./step-CuPD0mOn.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DkCNlDk1.js";import"./Dot-BwV8U2lv.js";import"./getRadiusAndStrokeWidthFromDot-BoQ0loRr.js";import"./useElementOffset-jStCutUO.js";import"./uniqBy-u5dTU2Kl.js";import"./iteratee-DNOBrypk.js";import"./Cross-CgngORpb.js";import"./Sector-D-QglBrT.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
