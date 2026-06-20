import{R as t}from"./iframe-BFQyqMbU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cz8KrmGC.js";import{R as l}from"./zIndexSlice-jJ_CaBDo.js";import{C as x}from"./ComposedChart-Pdj8BLwD.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DC-h1kcG.js";import{L as a}from"./Line-Chmj4NtI.js";import{X as c}from"./XAxis-Db3L_JCQ.js";import{T as g}from"./Tooltip-CXFEEuZc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-p4pcudXd.js";import"./CartesianAxis-JBeJCkI-.js";import"./Layer-BpUtlx2X.js";import"./resolveDefaultProps-B_ssPDKF.js";import"./Text-BMugx81A.js";import"./DOMUtils-CzHwSZC9.js";import"./isWellBehavedNumber-CXuZhh3h.js";import"./Label-BBfCiCQ6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPawcbSR.js";import"./index-lcxumIdx.js";import"./index-yqk7rkqd.js";import"./types-cy48Xvgh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-HnYJqdGr.js";import"./immer--b20-lFI.js";import"./RechartsWrapper-BounuTKv.js";import"./index-CDKHoQ9z.js";import"./index-Gba51aKu.js";import"./axisSelectors-CRFbB7ND.js";import"./d3-scale--vDRC-Zz.js";import"./CartesianChart-qgf-TM4c.js";import"./chartDataContext-BM8qcz36.js";import"./CategoricalChart-FqadQC9J.js";import"./tooltipContext-DfgQTVQM.js";import"./AnimatedItems-BA8IgjUl.js";import"./useAnimationId-D_DRQ5ok.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CLh9RCDA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BDWRsG1S.js";import"./RegisterGraphicalItemId-BEWz97Wy.js";import"./ErrorBarContext-CGoKUjs6.js";import"./GraphicalItemClipPath-B53LZcY2.js";import"./SetGraphicalItem-D0WJt6mF.js";import"./getZIndexFromUnknown-DoUTtBWJ.js";import"./graphicalItemSelectors-Bgaf2_KE.js";import"./Curve-BGI4IKSF.js";import"./step-D-tHTqvJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CftO_jkK.js";import"./Dot-BN0Lszie.js";import"./getRadiusAndStrokeWidthFromDot-C2SI6lR2.js";import"./useElementOffset-iy_d7mMM.js";import"./uniqBy-w3S1ilQh.js";import"./iteratee-cMb-fu6v.js";import"./Cross-DiEAKJxm.js";import"./Sector-C2-9f_ud.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
