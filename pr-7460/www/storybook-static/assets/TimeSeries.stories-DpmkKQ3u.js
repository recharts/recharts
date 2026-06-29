import{R as e}from"./iframe-BLwLvMjc.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-ejI-Sa_I.js";import{R as h}from"./zIndexSlice-f39TItqz.js";import{C as g}from"./ComposedChart-CxKCgcGS.js";import{L as x}from"./Line-1bQ5HATy.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DDplI62N.js";import{T as V}from"./Tooltip-D2jjsH3C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BkG6HND6.js";import"./CartesianAxis-BaKeQioI.js";import"./Layer-Bt0_PYLT.js";import"./resolveDefaultProps-BYhifOb3.js";import"./Text-D72Dyp1P.js";import"./DOMUtils-BokrT3el.js";import"./isWellBehavedNumber-CptpHwFR.js";import"./Label-pioiAs6J.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-YEu_ZQSO.js";import"./index-CX4CypQp.js";import"./index-BMdMuoJa.js";import"./types-WD3PBzf9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqNNgNfR.js";import"./immer-D_8Dczsi.js";import"./RechartsWrapper-B0n9oFWZ.js";import"./index-940TGUxY.js";import"./index-C34Ey_Rg.js";import"./axisSelectors-D58BkBim.js";import"./CartesianChart-C4yu5ilR.js";import"./chartDataContext-B-M33Z7B.js";import"./CategoricalChart-CRVqHKQs.js";import"./Curve-Bgoi8H0P.js";import"./step-Y_PLHiNv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BZKtZoic.js";import"./useAnimationId-CqDdhCYT.js";import"./ActivePoints-DpoXb-Tp.js";import"./Dot-DDBvFNxJ.js";import"./RegisterGraphicalItemId-BnK-7IkL.js";import"./ErrorBarContext-DWoI7kQ6.js";import"./GraphicalItemClipPath-DiOFFyuB.js";import"./SetGraphicalItem-DSxSXGHZ.js";import"./getRadiusAndStrokeWidthFromDot-BHSa5sI8.js";import"./ActiveShapeUtils-peAesLaa.js";import"./useElementOffset-BL78dp6_.js";import"./uniqBy-Du5aieGd.js";import"./iteratee-Wx63tvk5.js";import"./Cross-315Cf3Tw.js";import"./Rectangle-wKNM39ge.js";import"./util-Dxo8gN5i.js";import"./Sector-CpXVAgg0.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
