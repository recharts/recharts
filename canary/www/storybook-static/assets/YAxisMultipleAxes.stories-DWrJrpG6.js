import{R as t}from"./iframe-CM9KFlpR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CI94Yo_i.js";import{R as l}from"./zIndexSlice-i3oRyNLb.js";import{C as x}from"./ComposedChart-BliiGcYz.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cwvj_01T.js";import{L as a}from"./Line-D_p7ofiv.js";import{X as c}from"./XAxis-BpZNPHzq.js";import{T as g}from"./Tooltip-Cz2C8J7G.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-wxz_d6Fj.js";import"./Layer-CyTLoz3L.js";import"./resolveDefaultProps-Ck7rGCA-.js";import"./Text-Z2Be4kdC.js";import"./DOMUtils-5L50_gtE.js";import"./isWellBehavedNumber-D6ap16Bm.js";import"./Label-8JT3S2zg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CLQFgWIH.js";import"./index-DWeI466K.js";import"./index-CIwJAIlL.js";import"./types-BZH27c5K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B9ba2EdW.js";import"./throttle-De6mCLNM.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DaqDuaqH.js";import"./index-BQLe23-Y.js";import"./index-CO_J2hQh.js";import"./axisSelectors-gWKpmW3G.js";import"./d3-scale-BtCHm39u.js";import"./CartesianChart-Bh6VCjY7.js";import"./chartDataContext-Do1rIj0R.js";import"./CategoricalChart-DG8gXHxR.js";import"./tooltipContext-CZ6_3IBR.js";import"./AnimatedItems-Dc6JrbcK.js";import"./useAnimationId-OG1_HfMp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DTzWPR0Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BKApU02X.js";import"./RegisterGraphicalItemId-BY7wzIRb.js";import"./ErrorBarContext-L6TULBDt.js";import"./GraphicalItemClipPath-mABwVFdR.js";import"./SetGraphicalItem-CktbvIN2.js";import"./getZIndexFromUnknown-Cv5Y_cVr.js";import"./graphicalItemSelectors-DJPuYJhE.js";import"./Curve-DN_e8w4x.js";import"./step-DSranele.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BWeInnwU.js";import"./Dot-kCj2iLyE.js";import"./getRadiusAndStrokeWidthFromDot-CWl-YjkB.js";import"./useElementOffset-Ce1ZX6FX.js";import"./uniqBy-CUPFsq1k.js";import"./iteratee-FPt0V19d.js";import"./Cross-fbV1HsI7.js";import"./Sector-B_QVEzjH.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
