import{R as t}from"./iframe-BcaWFD7u.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CG4baE84.js";import{R as l}from"./zIndexSlice-bS7cYBKO.js";import{C as x}from"./ComposedChart-BWld5lXM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DnRwjdqW.js";import{L as a}from"./Line-CtVnRj6L.js";import{X as c}from"./XAxis-DD0jXpQz.js";import{T as g}from"./Tooltip-VxBAnM0q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C-frAhmf.js";import"./Text-C02gRxFY.js";import"./resolveDefaultProps-CqMML5sA.js";import"./DOMUtils-BvzyNhX6.js";import"./isWellBehavedNumber-BP6UcqH1.js";import"./useId-Dsncsbnj.js";import"./useBackwardsCompatibleTheme-R44_v_zH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CI7tJTJS.js";import"./index-DD-aKuCi.js";import"./index-DVZ7kkny.js";import"./RechartsWrapper-C-VIMVig.js";import"./index-Cgtj3oPE.js";import"./index-xxpNQb8f.js";import"./throttle-Dz1UTb_M.js";import"./axisSelectors-D0fMBFBE.js";import"./d3-scale-CjZBqtB1.js";import"./renderedTicksSlice-naYz1W_2.js";import"./CartesianAxis-D8v1d9Y9.js";import"./Layer-BhtJX80Y.js";import"./types-BCqYYX1O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CjI4gSTo.js";import"./chartDataContext-BwgPsUMn.js";import"./CategoricalChart-CgNZHuyL.js";import"./AnimatedItems-e5mGDN3Y.js";import"./useAnimationId-DDgucPPX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYLlJBXy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BL97HDhi.js";import"./tooltipContext-Fycs4bl4.js";import"./RegisterGraphicalItemId-C3WPLV-4.js";import"./ErrorBarContext-CyXVsRn2.js";import"./GraphicalItemClipPath-BL_hooiS.js";import"./SetGraphicalItem-BClSdCLV.js";import"./getZIndexFromUnknown-DNPKXyYs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-ITGLymVg.js";import"./Curve-DaA6zKZn.js";import"./step-CXwuHX1W.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CvqJbqjR.js";import"./Dot-DD0Nn15x.js";import"./getRadiusAndStrokeWidthFromDot-DyVM-7ZZ.js";import"./useElementOffset-DHdFJydJ.js";import"./uniqBy-Bkj6aSgv.js";import"./iteratee-Bj7EDGxK.js";import"./Cross-DXsiCygx.js";import"./Sector-l1-yrPuy.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
