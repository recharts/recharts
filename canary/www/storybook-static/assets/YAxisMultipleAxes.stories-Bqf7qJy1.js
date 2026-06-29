import{R as t}from"./iframe-DyrNzYfG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D2470_wO.js";import{R as l}from"./zIndexSlice-BxcBivH8.js";import{C as x}from"./ComposedChart-CU6tXOSz.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-fQF2BH1m.js";import{L as a}from"./Line-zTFVT4TP.js";import{X as c}from"./XAxis-BfZ0zCU8.js";import{T as g}from"./Tooltip-C065pFJA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cagOI5AH.js";import"./CartesianAxis-DqWwR38e.js";import"./Layer-BL2D6iSn.js";import"./resolveDefaultProps-xqaJSNtt.js";import"./Text-CnNg3gGa.js";import"./DOMUtils-odAOb060.js";import"./isWellBehavedNumber-Bd2sibwy.js";import"./Label-mQIBMRk4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BkddZKJi.js";import"./index-CHWPJWR6.js";import"./index-NUd0OKr5.js";import"./types-DDNG0zv9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6uhyxBm.js";import"./throttle-Cm4al6R2.js";import"./RechartsWrapper-BdG0zq9-.js";import"./index-CdQUwFqU.js";import"./index-BpeVWu4H.js";import"./axisSelectors-CD9PShsx.js";import"./d3-scale-BldhV8lg.js";import"./CartesianChart-UfO6rtst.js";import"./chartDataContext-CubF16Dj.js";import"./CategoricalChart-CWXn607r.js";import"./tooltipContext-Cz-O6016.js";import"./AnimatedItems-Cq3mCAt5.js";import"./useAnimationId-AVj-rcCC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CK9rNIIm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9juqJKGt.js";import"./RegisterGraphicalItemId-CvfrlEi9.js";import"./ErrorBarContext-XAPu5vDV.js";import"./GraphicalItemClipPath-ClGJav6d.js";import"./SetGraphicalItem-xVo5bUKT.js";import"./getZIndexFromUnknown-DFBrmXN3.js";import"./graphicalItemSelectors-C0la4YRj.js";import"./Curve-CV1SC5oG.js";import"./step-BTLusNHS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DnBcqYjd.js";import"./Dot-DyBJR96w.js";import"./getRadiusAndStrokeWidthFromDot-DwRxyJur.js";import"./useElementOffset-CsvBpDcL.js";import"./uniqBy-DxrPsyJv.js";import"./iteratee-DWMjSvsX.js";import"./Cross-CKC1fqG6.js";import"./Sector-wCt2OPFG.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
