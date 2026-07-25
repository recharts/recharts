import{R as t}from"./iframe-DtpJQkSw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-7KC79Jwd.js";import{R as l}from"./zIndexSlice-Dy2ZfcaY.js";import{C as x}from"./ComposedChart-oPCW50r4.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-nY2TF4Rx.js";import{L as a}from"./Line-DAT6---J.js";import{X as c}from"./XAxis-BDLA9mvH.js";import{T as g}from"./Tooltip-zaUriAhU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-xTL6XmTN.js";import"./Layer-A5fdUiAt.js";import"./resolveDefaultProps-Cjc4ovdW.js";import"./Text-CTFoNHWc.js";import"./DOMUtils-Cb4JkhR_.js";import"./isWellBehavedNumber-BvF_giMt.js";import"./Label-C9iRyFHw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnsLSc-b.js";import"./index-CVik1Y94.js";import"./index-qBeIIgbT.js";import"./types-D6abfmrW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4FsNrs6.js";import"./throttle-CYLsUs0w.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-GuBZSFZ_.js";import"./index-Vvo-Q6um.js";import"./index-CFRYfm15.js";import"./axisSelectors-BtA0yFqg.js";import"./d3-scale-BbQAu0RB.js";import"./CartesianChart-DwY-VUV4.js";import"./chartDataContext-CkSWHG6R.js";import"./CategoricalChart-B6Np4ceD.js";import"./tooltipContext-GY6HBjLg.js";import"./AnimatedItems-EBWp9peZ.js";import"./useAnimationId-B_99W7UQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C0kyo6e1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DirzpQmC.js";import"./RegisterGraphicalItemId-Bw3Bvi6g.js";import"./ErrorBarContext-CjSCr-ku.js";import"./GraphicalItemClipPath-DeNzzcHV.js";import"./SetGraphicalItem-x1medb7e.js";import"./getZIndexFromUnknown-Gcw-V9Nf.js";import"./graphicalItemSelectors-3hFJ8itx.js";import"./Curve-D1mPklqy.js";import"./step-WcxcGmzd.js";import"./path-DyVhHtw_.js";import"./ActivePoints-G-h1IpPy.js";import"./Dot-DSt-WMWp.js";import"./getRadiusAndStrokeWidthFromDot-N4R43LAE.js";import"./useElementOffset-C4-NwrTh.js";import"./uniqBy-BnEmKZKr.js";import"./iteratee-ySlvR2sc.js";import"./Cross-B0Cxc6Kn.js";import"./Sector-SxN6jnjg.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
