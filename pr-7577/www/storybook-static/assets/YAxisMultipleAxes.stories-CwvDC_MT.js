import{R as t}from"./iframe-DDIh6oSg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DvaopW4j.js";import{R as l}from"./zIndexSlice-D80Tj10e.js";import{C as x}from"./ComposedChart-Bwi8FpMM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C_V-5kbn.js";import{L as a}from"./Line-DXn8wVtE.js";import{X as c}from"./XAxis-BkhNyeaA.js";import{T as g}from"./Tooltip-CdVaJTp7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DjQVT2FJ.js";import"./Layer-BjK-uYm4.js";import"./resolveDefaultProps-BovobWDa.js";import"./Text-DiDEm6xU.js";import"./DOMUtils-DNdwN9ud.js";import"./isWellBehavedNumber-m0qYgEug.js";import"./Label-7ECcoRBX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CDkdwb16.js";import"./index-Dxp0N8dY.js";import"./index-BAP9iPcz.js";import"./types-CnDlnigw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CodWg03c.js";import"./throttle-Bz-N2EDI.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DOoCLeb6.js";import"./index-BwBS1vT9.js";import"./index-CVFqeXWK.js";import"./axisSelectors-Cj35qO4m.js";import"./d3-scale-DyPEX_SS.js";import"./CartesianChart-B73dWYbg.js";import"./chartDataContext-CsvjkcDn.js";import"./CategoricalChart-B8WXtgJK.js";import"./tooltipContext-BPOtM-wt.js";import"./AnimatedItems-BksUzG9w.js";import"./useAnimationId-Cx3p02Wi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZqE5oO7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSNDz2f-.js";import"./RegisterGraphicalItemId-CqU17xv7.js";import"./ErrorBarContext-Bx5pZcRj.js";import"./GraphicalItemClipPath-BMP70uQv.js";import"./SetGraphicalItem-BS0-pWrT.js";import"./getZIndexFromUnknown-aWcUo4wa.js";import"./graphicalItemSelectors-CiQeUF16.js";import"./Curve-Cd-wWA8T.js";import"./step-i4RfCE80.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D9ieR1r7.js";import"./Dot-C-WD7XjH.js";import"./getRadiusAndStrokeWidthFromDot-B0O65Yh_.js";import"./useElementOffset-BTJrpw-d.js";import"./uniqBy-D9_WQstA.js";import"./iteratee-CKafh1uf.js";import"./Cross-CaKJ6mZ9.js";import"./Sector-CxsD9MnG.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
