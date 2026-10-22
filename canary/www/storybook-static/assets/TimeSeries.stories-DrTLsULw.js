import{R as e}from"./iframe-BqFv--n0.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Dd_n4Mfj.js";import{R as h}from"./zIndexSlice-CQSP_367.js";import{C as g}from"./ComposedChart-BGPVJCGM.js";import{L as x}from"./Line-Cu7SDvK4.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CFuq5uTk.js";import{T as V}from"./Tooltip-CKUlzj5y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CpohuUTj.js";import"./Layer-VP2k7KQb.js";import"./resolveDefaultProps-D0e0pmfJ.js";import"./Text-BW5R7YWF.js";import"./pageBackground-B1lJR1Eh.js";import"./isWellBehavedNumber-xy8z0j2l.js";import"./useId-Ddcb8ROb.js";import"./useBackwardsCompatibleTheme-NnVOi814.js";import"./Label-DI-ST-i-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-m5JcFv6F.js";import"./index-BLvw7yWi.js";import"./index-Bv6EKtOE.js";import"./types-A41OMRS1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CjmFqNX-.js";import"./throttle-u_PA2Aue.js";import"./index-CDAyT67T.js";import"./index-BxavCyTA.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-ZWEeDNRz.js";import"./RechartsWrapper-CRaC0TZF.js";import"./index-3DQVsuvq.js";import"./CartesianChart-CWGitRSv.js";import"./chartDataContext-uAg4LOvf.js";import"./CategoricalChart-LtTngwAd.js";import"./Curve-B2qT8EGI.js";import"./step-DAllZbzr.js";import"./path-DyVhHtw_.js";import"./activeStyles-C0pD60nL.js";import"./useAnimationId-CZ2QT6KZ.js";import"./dataEntryStyles-Ijd8738K.js";import"./ActivePoints-BuaaOhKZ.js";import"./Dot-Ck25bOyu.js";import"./ErrorBarContext-CHaebdqW.js";import"./GraphicalItemClipPath-DlDw9PG0.js";import"./SetGraphicalItem-DarYZt9y.js";import"./getRadiusAndStrokeWidthFromDot-pw39BaVD.js";import"./ActiveShapeUtils-4w4oDN2L.js";import"./useEffectiveDataKey-B-x1_7m_.js";import"./useElementOffset-DK8O9wAS.js";import"./uniqBy-BAbl3tI-.js";import"./iteratee-DOA0wS8i.js";import"./isArguments-yB-y1yaH.js";import"./Cross-FUOJO6PC.js";import"./Rectangle-Bht2f_LE.js";import"./util-Dxo8gN5i.js";import"./Sector-Bm9vHCvm.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
