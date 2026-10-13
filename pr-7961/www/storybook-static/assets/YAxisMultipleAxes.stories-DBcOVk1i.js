import{R as t}from"./iframe-FwppTpHM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-XAPAfHiU.js";import{R as l}from"./zIndexSlice-Cdyw1_Nw.js";import{C as x}from"./ComposedChart-B8bgAvdx.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DDB9rMia.js";import{L as a}from"./Line-LRONPAn4.js";import{X as c}from"./XAxis-Dfnm77SQ.js";import{T as g}from"./Tooltip-SXtiBwJi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CAlmg9Ax.js";import"./Text-BHYGaRJX.js";import"./resolveDefaultProps-Dg1uW6dq.js";import"./pageBackground-b_qu_h6D.js";import"./isWellBehavedNumber-BtAr22s4.js";import"./useId-BHaTovYI.js";import"./useBackwardsCompatibleTheme-C6cobGh6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRZokez8.js";import"./index-CTPoMXid.js";import"./index-C7fIk2L2.js";import"./axisSelectors-CYDcyh2t.js";import"./throttle-DynP12Or.js";import"./d3-scale-CvbHukpk.js";import"./CartesianAxis-DkQ_2z38.js";import"./Layer-RexR8ZVM.js";import"./types-X--Y4OUw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CFwd7tbS.js";import"./index-j_zzBaKn.js";import"./index-CjtLyLD1.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Dkm03yWw.js";import"./index-BJCItLgT.js";import"./CartesianChart-C3hX79Jh.js";import"./chartDataContext-Cg_fY9Ny.js";import"./CategoricalChart-fXjCF4k1.js";import"./activeStyles-BjBEPVwb.js";import"./useAnimationId-C9td6Uok.js";import"./dataEntryStyles-DQ6Q68IL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cyh7rUiN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DfcLFOOu.js";import"./tooltipContext-LtYkioxh.js";import"./ErrorBarContext-DXeoB9w9.js";import"./GraphicalItemClipPath-DQPgZbCX.js";import"./SetGraphicalItem-y_hedEIa.js";import"./getZIndexFromUnknown-Cxd0y3W6.js";import"./useEffectiveDataKey-edM5h020.js";import"./Curve-DWgCdSwb.js";import"./step-CMSN2AEQ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dq2ONYdH.js";import"./Dot-DDum5Zjk.js";import"./getRadiusAndStrokeWidthFromDot-C9HuDRcP.js";import"./useElementOffset-mqvu6iZU.js";import"./uniqBy-Dj9uXd3I.js";import"./iteratee-BHQWYI0c.js";import"./Cross-DhY-NKVD.js";import"./Sector-Ck-sJF4z.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
