import{R as t}from"./iframe-C3hysSwX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-nAN9SxkJ.js";import{R as l}from"./zIndexSlice-jLrLCsrp.js";import{C as x}from"./ComposedChart-4b-0Cq8-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DEXjRbxd.js";import{L as a}from"./Line-BVlSac6Z.js";import{X as c}from"./XAxis-Bz5F1_iJ.js";import{T as g}from"./Tooltip-DO4Ooh_G.js";import"./preload-helper-Dp1pzeXC.js";import"./get-4mmuOJ4Q.js";import"./CartesianAxis-DJwGDBXD.js";import"./Layer-BWZwdMd6.js";import"./resolveDefaultProps-XPHM9Bxg.js";import"./Text-9LavA5GP.js";import"./DOMUtils-B0ueEniv.js";import"./isWellBehavedNumber-Cfqt3JW2.js";import"./Label-BY3nn8Dv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbmqSC7x.js";import"./index-BUU-eT_B.js";import"./index-DdpCgkK0.js";import"./types-B-fiXt0f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CSlp22Dw.js";import"./immer-BNUBbCyS.js";import"./RechartsWrapper-CJVzzpRJ.js";import"./index-BV0Ox4K8.js";import"./index-By0blv9S.js";import"./axisSelectors-BKkILLr_.js";import"./d3-scale-Z5oWCNO5.js";import"./CartesianChart-Dz5Andp2.js";import"./chartDataContext-Da5IPa1T.js";import"./CategoricalChart-BUhA_1lj.js";import"./tooltipContext-Cl27E7yB.js";import"./AnimatedItems-CONL8zCq.js";import"./useAnimationId-CTVdzEbK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D6Gug0yv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DTMmpBlQ.js";import"./RegisterGraphicalItemId-o0SeLVTS.js";import"./ErrorBarContext-D24MXSMJ.js";import"./GraphicalItemClipPath-Cs8iTjY6.js";import"./SetGraphicalItem-CmkEoewy.js";import"./getZIndexFromUnknown-DgktQUiA.js";import"./graphicalItemSelectors-BNxv7hUU.js";import"./Curve-6434-3z9.js";import"./step-C_2ct0pZ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-iKVh12Ay.js";import"./Dot-B1rRcV2J.js";import"./getRadiusAndStrokeWidthFromDot-CVqEtKFE.js";import"./useElementOffset-TFATomwh.js";import"./uniqBy-rAXM5un4.js";import"./iteratee-Bj0cTPCe.js";import"./Cross-BGe6GpMn.js";import"./Sector-Cq5G9PM-.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
