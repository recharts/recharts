import{R as t}from"./iframe-CQz631Nk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CWW4X-Ki.js";import{R as l}from"./zIndexSlice-BiY29BHb.js";import{C as x}from"./ComposedChart-B-N3Zjvf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BjKBeWJq.js";import{L as a}from"./Line-CQpvxMmw.js";import{X as c}from"./XAxis-DHy0v3jD.js";import{T as g}from"./Tooltip-BP0a5D6r.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DQhaNgKG.js";import"./Text-CpmwLb5H.js";import"./resolveDefaultProps-BsWR9NdC.js";import"./DOMUtils-V3cEDC71.js";import"./isWellBehavedNumber-B7MN_LAX.js";import"./useId-BSAAHf1D.js";import"./useBackwardsCompatibleTheme-DhqH6-Ub.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LgQGURcB.js";import"./index-DCbtYhHK.js";import"./index-CDndXHyS.js";import"./RechartsWrapper-Btix0jtf.js";import"./axisSelectors-SdSrtuX_.js";import"./throttle-tlVaut9a.js";import"./d3-scale-DbP7sHTP.js";import"./index-BlfYBgju.js";import"./index-w2pZ54DA.js";import"./renderedTicksSlice-lkRk7heP.js";import"./index-CUVgoBSt.js";import"./CartesianAxis-Dd11BP7Z.js";import"./Layer-DGn6U-cs.js";import"./types-qf3XACEN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-WE1bkj_w.js";import"./chartDataContext-ef-S8XKm.js";import"./CategoricalChart-6rYejfBQ.js";import"./AnimatedItems-B3DzMe78.js";import"./useAnimationId-DN0POjqt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cs9OQ1Xh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BfK0DvMY.js";import"./tooltipContext-CezEY4OY.js";import"./RegisterGraphicalItemId-Bdyk4ltG.js";import"./ErrorBarContext-BVC7bug8.js";import"./GraphicalItemClipPath-Db7czniJ.js";import"./SetGraphicalItem-DLB5o72P.js";import"./getZIndexFromUnknown-CZumgnna.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-gRJfRcSR.js";import"./Curve-B1Y35Tq4.js";import"./step-DM9ed4F2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BbCYqZ1B.js";import"./Dot-Br265cWC.js";import"./getRadiusAndStrokeWidthFromDot-CtkJeIr5.js";import"./useElementOffset-DUjnthxD.js";import"./uniqBy-BOB5B76R.js";import"./iteratee-D419HqXa.js";import"./Cross-D5AY4MRF.js";import"./Sector-BP4-KhMZ.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
