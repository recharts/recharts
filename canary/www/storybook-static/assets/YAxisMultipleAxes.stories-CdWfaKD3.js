import{R as t}from"./iframe-7ia7cOns.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-ClD5PA34.js";import{R as l}from"./zIndexSlice-CNZG0Y5y.js";import{C as x}from"./ComposedChart-Dkz69e1N.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DK_1j_ll.js";import{L as a}from"./Line-C0Z-Ezm6.js";import{X as c}from"./XAxis-CyA_GXTr.js";import{T as g}from"./Tooltip-C4oc2Rl5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Y02zXLeF.js";import"./Text-CkBg3X4g.js";import"./resolveDefaultProps-C774hdeP.js";import"./DOMUtils-BskzGjW1.js";import"./ZIndexLayer-BsU293fp.js";import"./index-CbtDNwdV.js";import"./index-lD6nPUSg.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-0UsOTGQK.js";import"./throttle-CuvGuAUJ.js";import"./axisSelectors-D31_gBEg.js";import"./d3-scale-DDTCvpuX.js";import"./CartesianAxis-B17J1uIc.js";import"./Layer-DH-Bpj5F.js";import"./types-CoWppO1p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHygufHc.js";import"./index-B7Wz_zu1.js";import"./index-uEerYH_x.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CDikf3PH.js";import"./index-DP-wgMO5.js";import"./CartesianChart-C1quWpWE.js";import"./ZIndexPortal-CBpzcmkv.js";import"./CategoricalChart-BjEI-7io.js";import"./LabelList-BkznOaj8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nIz-cHMY.js";import"./useAnimationId-dFi6qGfW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--ULkn_AA.js";import"./tooltipContext-CcM6rWLf.js";import"./dataEntryStyles-B9lOpBft.js";import"./fillDefinitions-Bh-Idu0v.js";import"./themeFill-B_wPexqX.js";import"./ErrorBarContext-CxoeLCh5.js";import"./activeStyles-CyfixWYK.js";import"./SetGraphicalItem-Cl9ASqDV.js";import"./getZIndexFromUnknown-C-J3wMPR.js";import"./useEffectiveDataKey-DpgRN79Y.js";import"./omit-CSH6g66U.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DRmYCb_P.js";import"./step-DopNAfqi.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B8drpMZ8.js";import"./Dot-djHPvui5.js";import"./Symbols-COiuuhwV.js";import"./symbol-Q9XLyBk-.js";import"./getRadiusAndStrokeWidthFromDot-CWANwgvT.js";import"./useElementOffset-CLrMTlCN.js";import"./uniqBy-BdDgBJqj.js";import"./iteratee-7m6p-S4N.js";import"./Cross-Dv-7A8UM.js";import"./Sector-DG3Kvf8d.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
