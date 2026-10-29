import{R as t}from"./iframe-DpFoyu2v.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-UjIlgdkn.js";import{R as l}from"./zIndexSlice-BR5-by35.js";import{C as x}from"./ComposedChart-DYhdzMG2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DsnOo6pN.js";import{L as a}from"./Line-DsODaGkU.js";import{X as c}from"./XAxis-B0PuBmnr.js";import{T as g}from"./Tooltip-ByKC-vUJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-RSQOEDTQ.js";import"./Text-B1i7DvDe.js";import"./resolveDefaultProps-Bl7dCfEE.js";import"./DOMUtils-I7Jj66xj.js";import"./ZIndexLayer-Q15FdZk9.js";import"./index-CXkQwc1T.js";import"./index-Dvxsi2Qy.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CoSF9I4I.js";import"./throttle-CbL9mvVE.js";import"./axisSelectors-DsRIuzGY.js";import"./d3-scale-DFMCrQku.js";import"./CartesianAxis-C3Cmf1pW.js";import"./Layer-C27d_lJh.js";import"./types-nITqZw6s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DLxnQ8Ny.js";import"./index-CQQQihly.js";import"./index-DPbLagXs.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BNB2siqp.js";import"./index-J5LyVsrM.js";import"./CartesianChart-C9Oi4Bgl.js";import"./ZIndexPortal-j1WUiNyF.js";import"./CategoricalChart-CbXZ5UqK.js";import"./LabelList-BcqFX_Cs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1RSMQ2o.js";import"./useAnimationId-DcTYtpTG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOhyqEjv.js";import"./tooltipContext-CGsnQSSL.js";import"./dataEntryStyles-BSD8zeo1.js";import"./ErrorBarContext-C0P4PP3P.js";import"./activeStyles-Dlv-kHFt.js";import"./SetGraphicalItem-BiUFphqr.js";import"./getZIndexFromUnknown-BleHfm24.js";import"./useEffectiveDataKey-D3EJWYit.js";import"./fillDefinitions-CLwCi-e2.js";import"./omit-Dp2qMHLc.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CrBw6Qm3.js";import"./step-DIzEC01T.js";import"./path-DyVhHtw_.js";import"./ActivePoints--ch9wTnx.js";import"./Dot-BBDn528y.js";import"./Symbols-BqVxLZyQ.js";import"./symbol-Bc1WE4jB.js";import"./getRadiusAndStrokeWidthFromDot-DS-6kW0Q.js";import"./useElementOffset-wTrI9o3y.js";import"./uniqBy-Bawyhepk.js";import"./iteratee-BD3h7MYT.js";import"./Cross-BMOocMKo.js";import"./Sector-DyuVM7Tk.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
