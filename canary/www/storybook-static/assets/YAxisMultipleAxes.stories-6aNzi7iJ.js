import{e as t}from"./iframe-Dbih6tM_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-x6PKBVdt.js";import{g as l}from"./zIndexSlice-F7HsGAhb.js";import{C as x}from"./ComposedChart-hkcoJXW_.js";import{p as A}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-BSkfuJDV.js";import{L as a}from"./Line-DKLERS8c.js";import{X as c}from"./XAxis-UKVsyr7-.js";import{T as g}from"./Tooltip-91lkN_Ou.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DVIR8H8G.js";import"./CartesianAxis-sMFUgupR.js";import"./Layer-B42S8g5T.js";import"./resolveDefaultProps-C6XhIduD.js";import"./Text-BD0wWctz.js";import"./DOMUtils-DtcMNyN4.js";import"./isWellBehavedNumber-C76PNx6x.js";import"./Label-CzYO866A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaMCCGdS.js";import"./index-C3fYT42t.js";import"./index-VrctuRm7.js";import"./types-Bhc7gOzP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CY1pIMUb.js";import"./immer-u9L_0Kl5.js";import"./RechartsWrapper-CzkBSRjy.js";import"./index-yjWx6Bgh.js";import"./axisSelectors-DGtb_paL.js";import"./d3-scale-QFZ3DYXF.js";import"./CartesianChart-sZ1KYKyT.js";import"./chartDataContext-CumcEPMe.js";import"./CategoricalChart-BUbHs2Eq.js";import"./tooltipContext-CFa6YsOM.js";import"./ReactUtils-Bj9mmMxB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DeVdQqm5.js";import"./useAnimationId-CWLhhp_H.js";import"./ActiveShapeUtils-B7EaMEP1.js";import"./RegisterGraphicalItemId-CoMv7TZ7.js";import"./ErrorBarContext-CaITZn-H.js";import"./GraphicalItemClipPath-BqpiOJ0K.js";import"./SetGraphicalItem-C_rRFyeV.js";import"./getZIndexFromUnknown-bgn1uqz8.js";import"./graphicalItemSelectors-BbOSuOCl.js";import"./Curve-CbpaSJeH.js";import"./step-EAtlMAAS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DzbjRTsh.js";import"./Dot-BKoIVpn9.js";import"./getRadiusAndStrokeWidthFromDot-DA8FMUL1.js";import"./useElementOffset-BXd0grxf.js";import"./uniqBy-ByRFrmC2.js";import"./iteratee-DEDrKpvz.js";import"./Cross-BehVYR4O.js";import"./Sector-C4ZURWaA.js";const It={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Et=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Et as __namedExportsOrder,It as default};
