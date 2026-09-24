import{R as t}from"./iframe-oenQDkae.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DxjcPAu-.js";import{R as l}from"./zIndexSlice-BolP6taR.js";import{C as x}from"./ComposedChart-CTlu4MhW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-_-jL9PZB.js";import{L as a}from"./Line-DmgKRVbq.js";import{X as c}from"./XAxis-BAapT_j6.js";import{T as g}from"./Tooltip-DX4d1O6-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BCANxpap.js";import"./Text-D5ThFr-V.js";import"./resolveDefaultProps-BMJPtlp2.js";import"./DOMUtils-Cj13ECRs.js";import"./isWellBehavedNumber-D7fX2EcX.js";import"./useId-CdRDsFJI.js";import"./useBackwardsCompatibleTheme-BdI5Azyq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9GKmy2X.js";import"./index-BSFq4RG1.js";import"./index-MHyjaTC8.js";import"./RechartsWrapper-CzSj_Srx.js";import"./axisSelectors-DouK1BqP.js";import"./throttle-MDW_1VLh.js";import"./d3-scale-DtmS-GpC.js";import"./index-BMWVfK_z.js";import"./index-ZmrPVgl6.js";import"./renderedTicksSlice-CXVO1QKM.js";import"./index-CZXeDDYw.js";import"./CartesianAxis-DeqFFLVl.js";import"./Layer-IdKk3EZa.js";import"./types-DhnB6M_7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Chu1Jshw.js";import"./chartDataContext-CJ85p7Fi.js";import"./CategoricalChart-BmbR8bdU.js";import"./AnimatedItems-DDFphvv3.js";import"./useAnimationId-BXnU9mnj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-7MVyRVY_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C5gHJrTE.js";import"./tooltipContext-BdZcZffo.js";import"./RegisterGraphicalItemId-CysjmqkX.js";import"./ErrorBarContext-D1o9R7Ud.js";import"./GraphicalItemClipPath-D7deAvGW.js";import"./SetGraphicalItem-BPqapuvy.js";import"./getZIndexFromUnknown-CpBcK-S1.js";import"./useGraphicalItemIdentity-ygWefbro.js";import"./Curve-BSb99er_.js";import"./step-Bev09Hzp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BSQAnEDd.js";import"./Dot-C-Nopngh.js";import"./getRadiusAndStrokeWidthFromDot-D9taOjnP.js";import"./useElementOffset-CWxGqy1I.js";import"./uniqBy-BAQHpx-P.js";import"./iteratee-Cc1JTqL9.js";import"./Cross-CMU6b0IL.js";import"./Sector-iX8mtA0m.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
