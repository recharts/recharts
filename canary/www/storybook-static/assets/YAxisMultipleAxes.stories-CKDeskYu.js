import{R as t}from"./iframe-B9f439XI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-JNrwnee_.js";import{R as l}from"./zIndexSlice-C6Otyq85.js";import{C as x}from"./ComposedChart-C-QIoD4C.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BEJi1GiS.js";import{L as a}from"./Line-B7UaIz2p.js";import{X as c}from"./XAxis-DOU84Hlo.js";import{T as g}from"./Tooltip-Cq18l-O4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DVN-Hwwb.js";import"./Text-Bow6SjUp.js";import"./resolveDefaultProps-gOTjLOeS.js";import"./DOMUtils-DhGAIzWN.js";import"./isWellBehavedNumber-CYewbHK2.js";import"./useId-C9eyJZjo.js";import"./useBackwardsCompatibleTheme-CPO8fYQ4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4eGne8u.js";import"./index-BbETDB0j.js";import"./index-Ba5C8sSe.js";import"./RechartsWrapper-DhjKeyZf.js";import"./axisSelectors-CtkTbFLc.js";import"./throttle-Cul9o8Fv.js";import"./d3-scale-D5l0Isqr.js";import"./index-C3T5ZoZg.js";import"./index--FioM-W6.js";import"./renderedTicksSlice-v2nQGwWu.js";import"./index-Dmy_GPO_.js";import"./CartesianAxis-DdFgmu19.js";import"./Layer-JExDg_3T.js";import"./types-BsF4BT96.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DaH8zaVP.js";import"./chartDataContext-1z3k21sD.js";import"./CategoricalChart-7BozNq5r.js";import"./AnimatedItems-17rMBNfA.js";import"./useAnimationId-7tiok7vs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0vFWPEb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Djn55Wjw.js";import"./tooltipContext-Co4pi7hv.js";import"./RegisterGraphicalItemId-CMz-uJdk.js";import"./ErrorBarContext-ltkmTZdi.js";import"./GraphicalItemClipPath-CarNY15C.js";import"./SetGraphicalItem-6PuFIxdb.js";import"./getZIndexFromUnknown-CYbW3jbK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Rx4jvPS9.js";import"./Curve-BNGAgwsP.js";import"./step-Cd0cogV_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Uofgco9H.js";import"./Dot-T9Kvs1vN.js";import"./getRadiusAndStrokeWidthFromDot-C7sSECjk.js";import"./useElementOffset-CX1bHy_W.js";import"./uniqBy-DENRboCh.js";import"./iteratee-CJfDgSnT.js";import"./Cross-Cn07LQ6x.js";import"./Sector-CeMmEBx2.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
