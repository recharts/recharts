import{R as t}from"./iframe-C5hmF0To.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-8wMoNgQN.js";import{R as l}from"./zIndexSlice-BixfUK5V.js";import{C as x}from"./ComposedChart-8HNQI9r3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DMRz1YNp.js";import{L as a}from"./Line-DEGUXAZ2.js";import{X as c}from"./XAxis-C0QI0HXh.js";import{T as g}from"./Tooltip-28ogAC6y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Du636Igd.js";import"./Text-C5taNjiE.js";import"./resolveDefaultProps-CdkFEDnC.js";import"./DOMUtils-BTnNVt5T.js";import"./isWellBehavedNumber-DY0MczIS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CCu8NHHi.js";import"./index-DPASLuit.js";import"./index-BrQaS3a5.js";import"./RechartsWrapper-C2jsJsE5.js";import"./index-CJFfs8Zx.js";import"./index-B_hHrNFX.js";import"./throttle-teWCo3kp.js";import"./renderedTicksSlice-Cp2rYryV.js";import"./axisSelectors-3ticTacJ.js";import"./d3-scale-B4bxyqZp.js";import"./CartesianAxis-Co52JpOx.js";import"./Layer-CDmGCMyH.js";import"./types-CeFfhpIK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-oPpqoGy7.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-luY4Ugiw.js";import"./chartDataContext-BtJuej3V.js";import"./CategoricalChart-B7M_pOAg.js";import"./tooltipContext-6ft3c5Lu.js";import"./AnimatedItems-BcG4wu47.js";import"./useAnimationId-WdLJ0TXq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CcdSdsCc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bfj9ZkEg.js";import"./RegisterGraphicalItemId-Db5IkoaQ.js";import"./ErrorBarContext-BXXzJsD_.js";import"./GraphicalItemClipPath-DzTwh4wM.js";import"./SetGraphicalItem-CGZeJBQo.js";import"./getZIndexFromUnknown-D7_bSQ98.js";import"./graphicalItemSelectors-Dvd0v0Xk.js";import"./Curve-cVSz_V8P.js";import"./step-AxYq5Lzl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DkEblMVf.js";import"./Dot-B5cqvfYd.js";import"./graphicalItemIdentity-BfXCt-oz.js";import"./useElementOffset-BvtQZ0-R.js";import"./uniqBy-BSE1jEQh.js";import"./iteratee-CTdVzveq.js";import"./Cross-CQZ99liq.js";import"./Sector-Bbn7YV2S.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
