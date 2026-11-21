import{R as e}from"./iframe-C9RR7JmE.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B6hKXJep.js";import{R as h}from"./zIndexSlice-9FgFGtgA.js";import{C as g}from"./ComposedChart-DzefamiH.js";import{L as x}from"./Line-CsoZzsvT.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CFw4t_7I.js";import{T as V}from"./Tooltip-D7Jum6np.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DmiMG-c8.js";import"./Layer-CF0GFBX9.js";import"./resolveDefaultProps-BS9vZKxy.js";import"./Text-m7bywbsW.js";import"./ZIndexLayer-CRt4gP-q.js";import"./index-C9sROg_Y.js";import"./index-DobETtGM.js";import"./Label-BaLJb5QI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-fbcgHrSa.js";import"./throttle-CSzDQiVS.js";import"./types-DEp2f933.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DG_92KFR.js";import"./index-Bp7vSvmR.js";import"./index-C4LPcI60.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-TgtedVmF.js";import"./RechartsWrapper-Bb98fXCM.js";import"./index-Dim785Oy.js";import"./fillDefinitions-BD293OF_.js";import"./CartesianChart-bv1G3A4F.js";import"./chartDataContext--IWIWppp.js";import"./CategoricalChart-CUD-tLds.js";import"./getRadiusAndStrokeWidthFromDot-xzaADJd5.js";import"./Curve-Cp4aQ8cc.js";import"./step-Sm-51kJi.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-B4uCvMTS.js";import"./ActivePoints-BLeTrPjm.js";import"./Dot-B-qNm1bD.js";import"./activeStyles-psvB14ar.js";import"./useAnimationId-P10-1iqt.js";import"./Symbols-DlwZKch0.js";import"./symbol-DWh1oIHF.js";import"./ErrorBarContext-D5q20nPS.js";import"./SetGraphicalItem-D9jhbnIr.js";import"./ActiveShapeUtils-xp9QUtvW.js";import"./useEffectiveDataKey-rhz_g6ic.js";import"./useElementOffset-C2cTU9_n.js";import"./uniqBy-DEPl67Hh.js";import"./iteratee-Rk_zuFbj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-uKm1mtpB.js";import"./Rectangle-DHyKIA3T.js";import"./util-Dxo8gN5i.js";import"./Sector-bBle_5Yt.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
