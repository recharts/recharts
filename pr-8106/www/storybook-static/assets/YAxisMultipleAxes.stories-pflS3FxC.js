import{R as t}from"./iframe-B_MIDKz_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D3fzxS21.js";import{R as l}from"./zIndexSlice-BRdFs8ID.js";import{C as x}from"./ComposedChart-BLBMKU0r.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BCask9Je.js";import{L as a}from"./Line-CxvYc4C3.js";import{X as c}from"./XAxis-C4lIERbq.js";import{T as g}from"./Tooltip-CNRGXaSi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CENIwYcD.js";import"./Text-B7cqpu59.js";import"./resolveDefaultProps-xzz5mEiC.js";import"./pageBackground-5b67NUgV.js";import"./ZIndexLayer-CUoHFkKf.js";import"./index-BrIcEx9Z.js";import"./index-BOmAjlKN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-mzwQQ_dU.js";import"./throttle-BEqz9r6e.js";import"./axisSelectors-Dl7meOBx.js";import"./d3-scale-TVFiOeXq.js";import"./CartesianAxis-ZYJAAdvA.js";import"./Layer-DNwByRxz.js";import"./types-B5hVBX50.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-yOWeuXiw.js";import"./index-DPAMyEeL.js";import"./index-CwOCWg00.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CqGFDY60.js";import"./index-BKlyB3jB.js";import"./CartesianChart-_H9IG9R2.js";import"./ZIndexPortal-DjuZ3mTH.js";import"./CategoricalChart-D_eNWRTX.js";import"./LabelList-BZln5lTY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-m0bX_fRW.js";import"./useAnimationId-BYTiB8_B.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D5xg6B3r.js";import"./tooltipContext-Bd3wPk_t.js";import"./dataEntryStyles-BFC38uYF.js";import"./ErrorBarContext-Dwk9fL5w.js";import"./activeStyles-CDqKbiIO.js";import"./SetGraphicalItem-vDiBonc7.js";import"./getZIndexFromUnknown-DSADA5M5.js";import"./useEffectiveDataKey-CNJBjtBe.js";import"./omit-BAbgDgVO.js";import"./isArguments-yB-y1yaH.js";import"./Curve-9U6noJF7.js";import"./step-Bj2YjaOf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-rPg8bsf1.js";import"./Dot-COTCbAgg.js";import"./Symbols-C4T4jjYn.js";import"./symbol-D75a70A4.js";import"./getRadiusAndStrokeWidthFromDot-DE4AoGFo.js";import"./useElementOffset-kN6XAzkC.js";import"./uniqBy-CXvSLOdk.js";import"./iteratee-CYXB4_wY.js";import"./Cross-DsABquOe.js";import"./Sector-BTnPCX-J.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
